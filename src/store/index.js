import Vue from "vue";
import Vuex from "vuex";


//引入nav
import nav from "./module/nav";
import moveList from "./module/MoveList";
import ctiy from "./module/ctiy";
import banner from "./module/banner";

Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    nav,    // nav 的模块
    moveList  , //影院的模块
    ctiy ,   //  地区
    banner,  //轮播图页面的
  }
});

export default store;

//
// state: {
//   isNav: true,   //是否显示底部导航栏
//     cinemaList: []     //默认城市影院
// },
// mutations: {
//   show(state) {
//     state.isNav = true;
//   },
//   hide(state) {
//     state.isNav = false;
//   },
//   //设置这个数组
//   setCinemaList(state, data) {
//     state.cinemaList = data;
//   }
// },
// actions: {
//   //获取所有影院信息
//   getCinemaActions({ commit, state }) {
//     instance.get("/gateway?cityId=310100&ticketFlag=1&k=909227", {
//       headers: {
//         "X-Host": "mall.film-ticket.cinema.list"
//       }
//     }).then((res) => {
//       commit("setCinemaList", res.data.data.cinemas);
//     });
//   }
// },
// getters: {
//   filterListLength(state) {
//     return state.cinemaList.filter((item, index) => index < 6);
//   }
// }
