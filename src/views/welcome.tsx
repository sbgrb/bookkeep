import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from './Welcome.module.scss'
import logo from '../assets/icons/mangosteen.svg'
export const welcome = defineComponent({
    setup: (props, context) => {
        return () => <div class={s.wrapper}>
            <header>
                <img src={logo} />
                <h2>日常记账</h2>
            </header>
            <main><RouterView /></main>
            <footer>buttons</footer>
        </div>
    }
})