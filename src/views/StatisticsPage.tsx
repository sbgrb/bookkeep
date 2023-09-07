import { defineComponent, ref } from "vue";
import s from './StatisticsPage.module.scss';
import { TimeLayout } from "../layouts/TimeLayout";
import { Charts } from "../components/statistics/Charts";
export const StatisticsPage = defineComponent({
    setup: (props, context) => {
        return () => <>
            <TimeLayout component={Charts} />
        </>
    }
})