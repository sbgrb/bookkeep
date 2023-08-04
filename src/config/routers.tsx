import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";
import { welcome } from "../views/Welcome";
import { FirstActions } from "../components/welcome/FirstActions";
import { SecondActions } from "../components/welcome/SecondActions";
import { ThirdActions } from "../components/welcome/ThirdActions";
import { ForthActions } from "../components/welcome/ForthActions";
import { StartPage } from "../views/StartPage";

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome' },
    {
        path: '/welcome', component: welcome, children: [
            { path: '', redirect: '/welcome/1' },
            { path: '1', name: 'welcome1', components: { main: First, footer: FirstActions } },
            { path: '2', name: 'welcome2', components: { main: Second, footer: SecondActions } },
            { path: '3', name: 'welcome3', components: { main: Third, footer: ThirdActions } },
            { path: '4', name: 'welcome4', components: { main: Forth, footer: ForthActions } },
        ]
    },
    { path: '/start', component: StartPage }
]