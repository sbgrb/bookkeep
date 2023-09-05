import { defineComponent, ref } from "vue";
import s from './ItemList.module.scss';
import { MainLayout } from "../../layouts/mainLayout";
import { Icon } from "../../utils/Icon";
import { Tabs,Tab } from "../../utils/Tabs";
export const ItemList = defineComponent({
    setup: (props, context) => {
        const onclick = () => { }
        const refSelected = ref('本月')
        return () => <>
            <MainLayout>
                {{
                    title: () => '记账',
                    icon: () => <Icon name="menu" />,
                    default: () => (
                      <Tabs classPrefix={'customTabs'} v-model:selected={refSelected.value}>
                        <Tab name="本月">
                          list 1
                        </Tab>
                        <Tab name="上月">
                          list 2
                        </Tab>
                        <Tab name="今年">
                          list 3
                        </Tab>
                        <Tab name="自定义时间">
                          list 4
                        </Tab>
                      </Tabs>
                    )
                    
                }}
            </MainLayout>
        </>
    }
})