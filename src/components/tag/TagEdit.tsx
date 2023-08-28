import { defineComponent, ref } from "vue";
import s from './TagEdit.module.scss';
export const TagEdit = defineComponent({
    setup: (props, context) => {
        return () => <>
            <div class={s.wrapper}></div>
        </>
    }
})