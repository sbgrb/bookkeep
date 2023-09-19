import { PropType, defineComponent, onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Icon } from "./Icon";
import s from "./Overlay.module.scss";
import { useMeStore } from "../stores/useMeStore";
import { showDialog } from "vant";
import "vant/es/dialog/style";
export const Overlay = defineComponent({
  props: {
    onClose: {
      type: Function as PropType<() => void>,
    },
  },
  setup: (props) => {
    const meStore = useMeStore();
    const close = () => {
      props.onClose?.();
    };
    const route = useRoute();
    const me = ref<User>();
    onMounted(async () => {
      const response = await meStore.mePromise;
      me.value = response?.data.resource;
    });
    const onSignOut = async () => {
      await showDialog({
        title: "确认",
        message: "你真的要退出登录吗？",
      });
      localStorage.removeItem("jwt");
      window.location.reload();
    };
    return () => (
      <>
        <div class={s.mask} onClick={close}></div>
        <div class={s.overlay}>
          <section class={s.currentUser}>
            {me.value ? (
              <div>
                <h2 class={s.email}>{me.value.email}</h2>
                <p onClick={onSignOut}>点击这里退出登录</p>
              </div>
            ) : (
              <RouterLink to={`/sign_in?return_to=${route.fullPath}`}>
                <h2>未登录用户</h2>
                <p>点击这里登录</p>
              </RouterLink>
            )}
          </section>
          <nav>
            <ul>
              <li>
                <RouterLink to="/items" class={s.action}>
                  <Icon name="pig" class={s.icon} />
                  <span>记账</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/statistics" class={s.action}>
                  <Icon name="charts" class={s.icon} />
                  <span>统计图表</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/export" class={s.action}>
                  <Icon name="export" class={s.icon} />
                  <span>导出数据</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/notify" class={s.action}>
                  <Icon name="notify" class={s.icon} />
                  <span>记账提醒</span>
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  },
});

export const OverlayIcon = defineComponent({
  setup: () => {
    const refOverlayVisiable = ref(false);
    const onclick = () => {
      refOverlayVisiable.value = !refOverlayVisiable.value;
    };
    return () => (
      <>
        <Icon name="menu" onClick={onclick} />
        {refOverlayVisiable.value && (
          <Overlay onClose={() => (refOverlayVisiable.value = false)} />
        )}
      </>
    );
  },
});
