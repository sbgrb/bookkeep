import { SkipFeatures } from '../../utils/SkipFeatures';
import s from './WelcomeLayout.module.scss';
import { RouterLink } from 'vue-router';
export const ForthActions = () => (
    <div class={s.actions}>
        <SkipFeatures class={s.fake} />
        <RouterLink to="/start" >完成</RouterLink>
        <SkipFeatures class={s.fake} />
    </div>
)

ForthActions.displayName = 'ForthActions'