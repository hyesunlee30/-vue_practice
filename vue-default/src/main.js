import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/storage";
import mixins from "@/mixins";
import VueSweetAlert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import i18nPlugin from "@/plugins/i18n";

const i18nPlugins = {
    en: {
        hi: 'Hello',
        save: 'Save'
    },
    ko: {
        hi: '안녕하세요',
        save: '저장'
    }
}

// createApp(App).use(router).use(VueSweetAlert2).mount("#app");
const app = createApp(App)
app.use(router)
app.mixin(mixins)
app.use(VueSweetAlert2)
app.use(i18nPlugin, i18nPlugins)
app.use(store)
app.directive('focus', {
   mounted(el) {
       el.focus();
    }
});
app.mount('#app')
