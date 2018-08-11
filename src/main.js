import Vue from "vue"
import App from "./App"
import store from "./store/"
Vue.config.productionTip = false
App.mpType = "app"
/* 注入全局store */
Vue.prototype.$store = store
/* 配置请求的地址 */
// Vue.prototype.$host = "http://192.168.43.7:8848"
Vue.prototype.$host = "http://localhost:8848"
const app = new Vue(App)
app.$mount()

export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: ["^pages/index/main", "pages/profile/main"],
        window: {
            backgroundTextStyle: "dark",
            navigationBarBackgroundColor: "#f2f3f4",
            navigationBarTextStyle: "black"
            // navigationStyle: "custom"
        },
        tabBar: {
            // position: "top",
            borderStyle: "black",
            selectedColor: "#ff1268",
            backgroundColor: "#fff",
            list: [
                {
                    pagePath: "pages/index/main",
                    text: "首页",
                    iconPath: "/assets/home.png",
                    selectedIconPath: "/assets/home-active.png"
                },
                {
                    pagePath: "pages/profile/main",
                    text: "我的",
                    iconPath: "/assets/my.png",
                    selectedIconPath: "/assets/my-active.png"
                }
            ]
        }
    }
}
/* 将wxRequest Promisify  并绑在vue的原型上*/
Vue.prototype.$http = (url, method = "GET") => {
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            method,
            success: res => resolve(res),
            fail: err => reject(err)
        })
    })
}
