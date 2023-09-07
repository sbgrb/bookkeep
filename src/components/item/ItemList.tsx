import { defineComponent } from "vue";
import { ItemSummary } from "./ItemSummary";
import { TimeLayout } from "../../layouts/TimeLayout";
export const ItemList = defineComponent({
  setup: (props, context) => {
    return () => <>
      <TimeLayout component={ItemSummary} />
    </>
  }
})