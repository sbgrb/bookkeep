import { defineComponent, ref } from "vue";
import s from './ItemList.module.scss';
export const ItemList = defineComponent({
    setup: (props, context) => {
        return () => <>
            <div class={s.wrapper}></div>
        </>
    }
})