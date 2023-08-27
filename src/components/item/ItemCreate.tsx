import { defineComponent, ref } from "vue";
import s from './ItemCreate.module.scss';
import { MainLayout } from "../../layouts/mainLayout";
import { Icon } from "../../utils/Icon";
import { Tabs, Tab } from "../../utils/Tabs";
export const ItemCreate = defineComponent({
    setup: (props, context) => {
        const refKind = ref('支出')
        const onclick = () => { }
        return () => <>
            <MainLayout>
                {{
                    title: () => '记一笔',
                    icon: () => <Icon name="left" onClick={onclick} />,
                    default: () => <>
                        <Tabs v-model:selected={refKind.value}>
                            <Tab name="支出">
                                列表1
                            </Tab>
                            <Tab name="收入">
                                列表2
                            </Tab>
                        </Tabs>
                    </>
                }}
            </MainLayout>
        </>
    }
})