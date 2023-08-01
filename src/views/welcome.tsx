import { defineComponent } from "vue";
import { RouterView } from "vue-router";
export const welcome = defineComponent({
    setup() {
        return () => <>
            <div><RouterView /></div>
        </>
    }
})