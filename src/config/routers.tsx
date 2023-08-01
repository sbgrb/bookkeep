import { RouteRecordRaw } from "vue-router";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { First } from "../components/welcome/first";
import { Second } from "../components/welcome/second";
import { Third } from "../components/welcome/third";
import { Forth } from "../components/welcome/forth";
import { welcome } from "../views/welcome";


export const routes: RouteRecordRaw[] = [
    { path: '/', component: Foo },
    { path: '/bar', component: Bar },
    {
        path: '/welcome', component: welcome, children: [
            { path: '1', component: First, },
            { path: '2', component: Second, },
            { path: '3', component: Third, },
            { path: '4', component: Forth, },
        ]
    }
]