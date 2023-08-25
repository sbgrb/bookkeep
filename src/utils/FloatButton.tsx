import { PropType, defineComponent, ref } from "vue";
import s from './FloatButton.module.scss';
import { Icon } from "./Icon";
type IconName = 'add' | ''
export const FloatButton = defineComponent({
    props: {
        iconName: {
            type: String as PropType<IconName>,
            required: true
        }
    },
    setup: (props, context) => {
        return () => <div class={s.floatButton}>
            <Icon name="add" />
        </div>
    }
})