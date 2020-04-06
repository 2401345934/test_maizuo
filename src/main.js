import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import swiper from "swiper";
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant);

//引入自定义指令
import "@/utils/directive";
//引入动态rem
import "@/utils/rem";
//引入全局样式
import "@/styles/main.scss";
//引入过滤器
import "@/utils/filter"
//引入全局组件
import "@/utils/components"
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
