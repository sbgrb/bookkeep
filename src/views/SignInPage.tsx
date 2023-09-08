import { defineComponent, PropType, reactive, ref } from 'vue';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../utils/Button';
import { Form, FormItem } from '../utils/Form';
import { Icon } from '../utils/Icon';
import { validate, hasError } from '../utils/validata';
import s from './SignInPage.module.scss';
import { http } from '../utils/Http';
import { useBool } from '../hooks/useBool';
import { history } from '../utils/history';
export const SignInPage = defineComponent({
    setup: (props, context) => {
        const validationCode = ref()
        const formData = reactive({
            email: '974487599@qq.com',
            code: ''
        })
        const errors = reactive({
            email: [],
            code: []
        })
        const onSubmit = async (e: Event) => {
            e.preventDefault()
            Object.assign(errors, {
                email: [], code: []
            })
            Object.assign(errors, validate(formData, [
                { key: 'email', type: 'required', message: '必填' },
                { key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
                { key: 'code', type: 'required', message: '必填' },
            ]))
            if (!hasError(errors)) {
                const response = await http.post<{ jwt: string }>('/session', formData)
                localStorage.setItem('jwt', response.data.jwt)
                history.push('/')
            }
        }
        const { ref: refDisabled, on: disabled, off: enable } = useBool(false)
        const onError = (error: any) => {
            if (error.response.status === 422) {
                Object.assign(errors, error.response.data.errors)
            }
            throw error
        }
        const onClickSendValidationCode = async () => {
            disabled()
            const response = await http.post('/validation_codes', { email: formData.email })
                .catch(onError).finally(enable)
            validationCode.value.countDown()
        }
        return () => (
            <MainLayout>{
                {
                    title: () => '登录',
                    icon: () => <Icon name="left" />,
                    default: () => (
                        <div class={s.wrapper}>
                            <div class={s.logo}>
                                <Icon class={s.icon} name="mangosteen" />
                                <h1 class={s.appName}>记账</h1>
                            </div>
                            <Form onSubmit={onSubmit}>
                                <FormItem label="邮箱地址" type="text"
                                    placeholder='请输入邮箱，然后点击发送验证码'
                                    v-model={formData.email} error={errors.email?.[0]} />
                                <FormItem ref={validationCode} label="验证码" type="validationCode"
                                    placeholder='请输入六位数字'
                                    countFrom={3}
                                    disabled={refDisabled.value}
                                    onClick={onClickSendValidationCode}
                                    v-model={formData.code} error={errors.code?.[0]} />
                                <FormItem style={{ paddingTop: '96px' }}>
                                    <Button type="submit">登录</Button>
                                </FormItem>
                            </Form>
                        </div>
                    )
                }
            }</MainLayout>
        )
    }
})