import { defineComponent, PropType } from "vue";
import { useRouter } from "vue-router";
import s from "./ComingSoon.module.scss";
import { Center } from "../../utils/Center";
import { Icon } from "../../utils/Icon";
import { Button } from "../../utils/Button";
export const ComingSoon = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const router = useRouter();
    const onClick = () => {
      router.back();
    };
    return () => (
      <div>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <p class={s.text}>敬请期待</p>
        <p class={s.link}>
          <Button onClick={onClick}>返回</Button>
        </p>
      </div>
    );
  },
});
