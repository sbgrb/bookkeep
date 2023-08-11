import { defineComponent, ref } from "vue";
import { Button } from "../utils/Button";
import s from './StartPgae.module.scss';
import { FloatButton } from "../utils/FloatButton";
import { Center } from "../utils/Center";
import { Navbar } from "../utils/Navbar";
export const StartPage = defineComponent({
    setup() {
        const onclick = () => {
            console.log('hi')
        }
        return () => <div>
            <Navbar>
                {{
                    default: '记账', icon: <svg>
                        <use xlinkHref='#menu'></use>
                    </svg>
                }}
            </Navbar>
            <Center class={s.pig_wrapper}>
                <svg>
                    <use xlinkHref='#pig'></use>
                </svg>
            </Center>
            <div class={s.button_wrapper}>
                <Button class={s.button} onClick={onclick}>开始记账</Button>
            </div>
            <FloatButton iconName="add" />
        </div>
    }
})