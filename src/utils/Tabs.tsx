import { PropType, defineComponent, ref } from "vue";
import s from './Tabs.module.scss';
export const Tabs = defineComponent({
    props: {
        selected: {
            type: String as PropType<string>
        }
    },
    setup: (props, context) => {
        return () => {
            const Tabs = context.slots.default?.()
            if (!Tabs) return () => null
            for (let i = 0; i < Tabs.length; i++) {
                if (Tabs[i].type !== Tab) {
                    throw new Error('<Tabs> only accepts <Tab> as children')
                }
            }
            return <div class={s.tabs}>
                <ol class={s.tabs_nav}>
                    {Tabs.map(item =>
                        <li class={item.props?.name === props.selected ? s.selected : ''}
                            onClick={() => context.emit('update:selected', item.props?.name)}
                        >
                            {item.props?.name}
                        </li>)}
                </ol>
                <div>
                    {Tabs.find(item => item.props?.name === props.selected)}
                </div>
            </div>
        }
    }
})

export const Tab = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup: (props, context) => {
        return () => (
            <div>{context.slots.default?.()}</div>
        )
    }
})