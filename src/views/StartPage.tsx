import { defineComponent, ref } from "vue";
import { Button } from "../utils/Button";
import s from './StartPgae.module.scss';
export const StartPage = defineComponent({
    setup() {
        const onclick = () => {
            console.log('hi')
        }
        return () => <div class={s.button_wrapper}>
            <Button class={s.button} onClick={onclick}>测试</Button>
        </div>
    }
})