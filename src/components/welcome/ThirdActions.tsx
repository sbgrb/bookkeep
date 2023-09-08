import s from './WelcomeLayout.module.scss';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
import { SkipFeatures } from '../../utils/SkipFeatures';
export const ThirdActions: FunctionalComponent = () => {
    return <div class={s.actions}>
        <SkipFeatures class={s.fake} />
        <RouterLink to="/welcome/4" >下一页</RouterLink>
        <SkipFeatures/>
    </div>
}

ThirdActions.displayName = 'ThirdActions'