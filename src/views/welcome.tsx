import { defineComponent, Transition, VNode, ref, watchEffect } from "vue";
import {
  RouterView,
  RouteLocationNormalizedLoaded,
  useRoute,
  useRouter,
} from "vue-router";
import s from "./Welcome.module.scss";
import { useSwipe } from "../hooks/useSwipe";
import { throttle } from "../utils/throttle";
import { Icon } from "../utils/Icon";
const pushMap: Record<string, string> = {
  welcome1: "/welcome/2",
  welcome2: "/welcome/3",
  welcome3: "/welcome/4",
  welcome4: "/start",
};
export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement>();
    const { direction, swiping } = useSwipe(main);
    const route = useRoute();
    const router = useRouter();
    const replace = throttle(() => {
      const name = (route.name || "welcome1").toString();
      router.replace(pushMap[name]);
    }, 500);
    watchEffect(() => {
      if (swiping.value && direction.value === "left") {
        replace();
      }
    });
    return () => (
      <div class={s.wrapper}>
        <header>
          <Icon name="mangosteen" />
          <h1>记账</h1>
        </header>
        <main class={s.main} ref={main}>
          <RouterView name="main">
            {({
              Component: X,
              route: R,
            }: {
              Component: VNode;
              route: RouteLocationNormalizedLoaded;
            }) => (
              <Transition
                enterFromClass={s.slide_fade_enter_from}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to}
                leaveActiveClass={s.slide_fade_leave_active}
              >
                {X}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer>
          <RouterView name="footer" />
        </footer>
      </div>
    );
  },
});

export default Welcome;
