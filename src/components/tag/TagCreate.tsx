import { defineComponent, reactive, toRaw } from "vue";
import s from './Tag.module.scss';
import { MainLayout } from "../../layouts/mainLayout";
import { Button } from "../../utils/Button";
import { Icon } from "../../utils/Icon";
import { EmojiSelect } from "../../utils/EmojiSelect";
import { Rules, validate } from "../../utils/validata";
import { TagForm } from "./TagForm";
export const TagCreate = defineComponent({
    setup: (props, context) => {
        const formData = reactive({
            name: '',
            sign: ''
        })
        const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
        const onsubmit = (e: Event) => {
            const rules: Rules<typeof formData> = [
                { key: 'name', type: 'required', message: '必填' },
                { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
                { key: 'sign', type: 'required', message: '必填' },
            ]
            Object.assign(errors, {
                name: undefined,
                sign: undefined
            })
            Object.assign(errors, validate(formData, rules))
            e.preventDefault()
        }
        return () => (
            <MainLayout>
                {{
                    title: () => '新建标签',
                    icon: () => <Icon name="left" class={s.icon} onClick={() => { }} />,
                    default: () => (
                        <TagForm />
                    )
                }}
            </MainLayout>
        )
    }
})