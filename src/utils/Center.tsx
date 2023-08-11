import { defineComponent, PropType } from "vue";
import s from './Center.module.scss';
const extraClassMap = {
    '-': 'horizontal',
    '|': 'vertical',
    'horizontal': 'horizontal',
    'vertical': 'vertical',
}
export const Center = defineComponent({
    props: {
        direction: {
            type: String as PropType<'-' | '|' | 'horizontal' | 'vertical'>,
            default: 'horizontal'
        }
    },
    setup: (props, context) => {
        const extraClass = extraClassMap[props.direction]
        return () => (<div class={[s.center, extraClass]}>
            {context.slots.default?.()}
        </div>)
    }
})