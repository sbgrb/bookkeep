import { defineComponent, reactive, ref,PropType } from "vue";
import s from './TimeLayout.module.scss';
import { Overlay } from 'vant';
import { MainLayout } from "./MainLayout";
import { Tabs,Tab } from "../utils/Tabs";
import { Time } from "../utils/time";
import { ItemSummary } from "./../components/item/ItemSummary";
import { Form,FormItem } from "../utils/Form";
import { OverlayIcon } from "../utils/Overlay";
const demo = defineComponent({
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
  })
export const TimeLayout = defineComponent({
    props: {
        component: {
          type: Object as PropType<typeof demo>,
          required: true
        }
    },
    setup: (props, context) => {
        const refSelected = ref('本月')
        const refOverlayVisible = ref(false)
        const onSubmitCustomTime = (e: Event) => {
          e.preventDefault()
          refOverlayVisible.value = false
        }
        const onSelect = (value: string) => {
          if (value === '自定义时间') {
            refOverlayVisible.value = true
          }
        }
        const time = new Time()
        const customTime = reactive({
          start: new Time().format(),
          end: new Time().format()
        })
        const timeList = [
          {
            start: time.firstDayOfMonth(),
            end: time.lastDayOfMonth()
          },
          {
            start: time.add(-1, 'month').firstDayOfMonth(),
            end: time.add(-1, 'month').lastDayOfMonth()
          },
          {
            start: time.firstDayOfYear(),
            end: time.lastDayOfYear()
          }
        ]
        return () => <>
            <MainLayout>
                {{
                    title: () => '记账',
                    icon: () => <OverlayIcon />,
                    default: () => <>
                        <Tabs classPrefix={'customTabs'} v-model:selected={refSelected.value}
                          onUpdate:selected={onSelect}>
                          <Tab name="本月">
                            <props.component startDate={timeList[0].start.format()} endDate={timeList[0].end.format()} />
                          </Tab>
                          <Tab name="上月">
                            <props.component startDate={timeList[1].start.format()} endDate={timeList[1].end.format()} />
                          </Tab>
                          <Tab name="今年">
                            <props.component startDate={timeList[2].start.format()} endDate={timeList[2].end.format()} />
                          </Tab>
                          <Tab name="自定义时间">
                            <props.component startDate={customTime.start} endDate={customTime.end} />
                          </Tab>
                        </Tabs>
                        <Overlay show={refOverlayVisible.value} class={s.overlay} >
                          <div class={s.overlay_inner}>
                            <header>
                              请选择时间
                            </header>
                            <main>
                              <Form onSubmit={onSubmitCustomTime}>
                                <FormItem label='开始时间' v-model={customTime.start} type='date' />
                                <FormItem label='结束时间' v-model={customTime.end} type='date' />
                                <FormItem>
                                  <div class={s.actions}>
                                    <button type="button" onClick={() => refOverlayVisible.value = false}>取消</button>
                                    <button type="submit">确认</button>
                                  </div>
                              </FormItem>
                              </Form>
                            </main>
                          </div>
                        </Overlay>
                      </>
                }}
            </MainLayout>
        </>
    }
})