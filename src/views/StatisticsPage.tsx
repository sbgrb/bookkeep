import { defineComponent, ref } from "vue";
import { TimeLayout } from "../layouts/TimeLayout";
import { Charts } from "../components/statistics/Charts";
export const StatisticsPage = defineComponent({
  setup: (props, context) => {
    return () => <TimeLayout rerenderOnSwitchTab={true} component={Charts} />;
  },
});
