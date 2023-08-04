import { defineComponent, ref } from "vue";
import { Button } from "../utils/Button";
import s from './StartPgae.module.scss';
import { FloatButton } from "../utils/FloatButton";
export const StartPage = defineComponent({
    setup() {
        const onclick = () => {
            console.log('hi')
        }
        return () => <div class={s.button_wrapper}>
            <Button class={s.button} onClick={onclick}>测试</Button>
            <FloatButton iconName="add" />
        </div>
    }
})