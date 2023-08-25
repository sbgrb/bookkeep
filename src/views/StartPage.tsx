import { defineComponent, ref } from "vue";
import { Button } from "../utils/Button";
import s from './StartPgae.module.scss';
import { FloatButton } from "../utils/FloatButton";
import { Center } from "../utils/Center";
import { Navbar } from "../utils/Navbar";
import { Overlay } from "../utils/Overlay";
import { Icon } from "../utils/Icon";
export const StartPage = defineComponent({
    setup() {
        const refOverlayVisiable = ref(false)
        const onclick = () => {
            refOverlayVisiable.value = !refOverlayVisiable.value
        }
        return () => <div>
            <Navbar>
                {{
                    default: () => '记账',
                    icon: () => <Icon name="menu" onClick={onclick} />
                }}
            </Navbar>
            <Center class={s.pig_wrapper}>
                <Icon name="pig" class={s.pig} />
            </Center>
            <div class={s.button_wrapper}>
                <Button class={s.button}>开始记账</Button>
            </div>
            <FloatButton iconName="add" />
            {refOverlayVisiable.value && <Overlay onClose={() => refOverlayVisiable.value = false} />}
        </div>
    }
})