import { defineComponent, ref } from "vue";
import { Button } from "../utils/Button";
import s from './StartPgae.module.scss';
import { FloatButton } from "../utils/FloatButton";
import { Center } from "../utils/Center";
import { Navbar } from "../utils/Navbar";
import { OverlayIcon } from "../utils/Overlay";
import { Icon } from "../utils/Icon";
import { RouterLink } from "vue-router";
import { MainLayout } from "../layouts/MainLayout";
export const StartPage = defineComponent({
    setup() {
        return () =>
            <MainLayout>
                {{
                    title: () => '记账',
                    icon: () => <OverlayIcon />,
                    default: () => <>
                        <Center class={s.pig_wrapper}>
                            <Icon name="pig" class={s.pig} />
                        </Center>
                        <div class={s.button_wrapper}>
                            <RouterLink to="/items/create">
                                <Button class={s.button}>开始记账</Button>
                            </RouterLink>
                        </div>
                        <RouterLink to="/items/create">
                            <FloatButton iconName="add" />
                        </RouterLink>
                    </>
                }}
            </MainLayout>
    }
})

export default StartPage