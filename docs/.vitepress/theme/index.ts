// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

// element
import "element-plus/dist/index.css";
import ElementPlus from "element-plus"
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.use(ElementPlus, {
            locale: zhCn
        });
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}