import Vue from 'vue'
import VueI18n from "vue-i18n";

import locale from 'element-ui/lib/locale';
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import zhCn from "@/lang/zh-cn";
import enUs from "@/lang/en-us";

Vue.use(VueI18n);

const messages = {
    enUs: {
        ...enUs,
        ...enLocale
    },
    zhCn: {
        ...zhCn,
        ...zhLocale
    }
}

const i18n = new VueI18n({
    locale: "enUs",
    messages
})

locale.i18n((key,value) => i18n.t(key, value))

export default i18n;