import { defineComponent, ref } from "vue";
import s from './TagPage.module.scss';
import { RouterView } from "vue-router";
export const TagPage = defineComponent({
    setup: (props, context) => {
        return () => <div>
            <RouterView />
        </div>
    }
})