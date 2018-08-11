import Vue from "vue"
import App from "./profile"

const app = new Vue(App)
app.$mount()

export default {
    config: {
        navigationBarTitleText: "我的",
        navigationBarBackgroundColor: "#ff1268",
        navigationBarTextStyle: "white"
    }
}
