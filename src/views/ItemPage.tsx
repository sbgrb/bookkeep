import { defineComponent, ref } from "vue";
import s from './ItemPage.module.scss';
export const ItemPage = defineComponent({
    setup: (props, context) => {
        return () => <>
            <div class={s.wrapper}>hi</div> 
        </>
    }
})