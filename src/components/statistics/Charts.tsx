import { defineComponent, PropType, ref } from 'vue';
import s from './Charts.module.scss';
import { FormItem } from '../../utils/Form';
import { LineChart } from './LineChart';
import { PieChart } from './PieChart';
import { Bars } from './Bar';
export const Charts = defineComponent({
    props: {
        startDate: {
            type: String as PropType<string>,
            required: true
        },
        endDate: {
            type: String as PropType<string>,
            required: true
        }
    },
    setup: (props, context) => {
        const category = ref('expenses')
        return () => (
            <div class={s.wrapper}>
                <FormItem label='类型' type="select" options={[
                    { value: 'expenses', text: '支出' },
                    { value: 'income', text: '收入' }
                ]} v-model={category.value} />
                <LineChart />
                <PieChart />
                <Bars />
            </div>
        )
    }
})