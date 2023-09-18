import { PropType, defineComponent, ref } from "vue";
import s from "./Tabs.module.scss";
export const Tabs = defineComponent({
  props: {
    classPrefix: {
      type: String,
    },
    selected: {
      type: String as PropType<string>,
    },
    rerenderOnSelect: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ["update:selected"],
  setup: (props, context) => {
    const cp = props.classPrefix;
    return () => {
      const Tabs = context.slots.default?.();
      if (!Tabs) return () => null;
      for (let i = 0; i < Tabs.length; i++) {
        if (Tabs[i].type !== Tab) {
          throw new Error("<Tabs> only accepts <Tab> as children");
        }
      }
      return (
        <div class={[s.tabs, cp + "_tabs"]}>
          <ol class={[s.tabs_nav, cp + "_tabs_nav"]}>
            {Tabs.map((item) => (
              <li
                class={[
                  item.props?.name === props.selected
                    ? [s.selected, cp + "_selected"]
                    : "",
                  cp + "_tabs_nav_item",
                ]}
                onClick={() =>
                  context.emit("update:selected", item.props?.name)
                }
              >
                {item.props?.name}
              </li>
            ))}
          </ol>
          <div>{Tabs.find((item) => item.props?.name === props.selected)}</div>
        </div>
      );
    };
  },
});

export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
    value: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>;
  },
});
