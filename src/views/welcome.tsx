import { defineComponent, Transition, VNode, ref, watchEffect } from "vue";
import { RouterView, RouteLocationNormalizedLoaded, useRoute, useRouter } from "vue-router";
import s from './Welcome.module.scss'
import { useSwipe } from "../hooks/useSwipe";
export const welcome = defineComponent({
    setup: (props, context) => {
        const main = ref<HTMLElement>()
        const { direction, swiping } = useSwipe(main)
        const route = useRoute()
        const router = useRouter()
        watchEffect(() => {
            if (swiping.value && direction.value === 'left') {
                console.log('aaa')
            }
        })
        return () => <div class={s.wrapper}>
            <header>
                <svg>
                    <use xlinkHref='#mangosteen'></use>
                </svg>
                <h1>山竹记账</h1>
            </header>
            <main class={s.main} ref={main}>
                <RouterView name="main">
                    {({ Component: X, route: R }: { Component: VNode, route: RouteLocationNormalizedLoaded }) =>
                        <Transition enterFromClass={s.slide_fade_enter_from} enterActiveClass={s.slide_fade_enter_active}
                            leaveToClass={s.slide_fade_leave_to} leaveActiveClass={s.slide_fade_leave_active}>
                            {X}
                        </Transition>
                    }
                </RouterView>
            </main>
            <footer>
                <RouterView name="footer" />
            </footer>
        </div>
    }
})