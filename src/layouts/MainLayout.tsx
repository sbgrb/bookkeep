import { defineComponent } from "vue";
// import s from './mainLayout.module.scss';
import { Navbar } from "../utils/Navbar";
export const MainLayout = defineComponent({
    setup: (props, context) => {
        return () => <div>
            <Navbar>
                {{
                    default: () => context.slots.title?.(),
                    icon: () => context.slots.icon?.(),
                }}
            </Navbar>
            {context.slots.default?.()}
        </div>
    }
})