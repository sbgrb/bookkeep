import s from './WelcomeLayout.module.scss';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
import { SkipFeatures } from '../../utils/SkipFeatures';
export const SecondActions: FunctionalComponent = () => {
  return <div class={s.actions}>
    <SkipFeatures class={s.fake} />
    <RouterLink to="/welcome/3" >下一页</RouterLink>
    <SkipFeatures />
  </div>
}

SecondActions.displayName = 'SecondActions'