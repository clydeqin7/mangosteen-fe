import s from './WelcomeLayout.module.scss';
import icon from "../../assets/icons/clock.svg";
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomLayout';
export const Second = () => (
  <WelcomeLayout>
    {{
      icon: () => <img class={s.icon} src={icon} />,
      title: () => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
        <RouterLink to="/welcome/3" >下一页</RouterLink>
        <RouterLink to="/start" >跳过</RouterLink>
      </>
    }}
  </WelcomeLayout>
)

Second.displayName = 'Second'