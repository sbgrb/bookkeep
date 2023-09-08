import s from './WelcomeLayout.module.scss';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
import { SkipFeatures } from '../../utils/SkipFeatures';
export const FirstActions: FunctionalComponent = () => {
    return <div class={s.actions}>
        <SkipFeatures class={s.fake} />
        <RouterLink to="/welcome/2" >下一页</RouterLink>
        <SkipFeatures />
    </div>
}

FirstActions.displayName = 'FirstActions'