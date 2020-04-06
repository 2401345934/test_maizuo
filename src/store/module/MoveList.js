import { instance } from "../../utils/http";


const module = {
  namespaced: true,
  state: {
    cinemaList: []     //默认城市影院
  },
  mutations: {
    setCinemaList(state, data) {
      state.cinemaList = data;
    }
  },
  actions: {
    //获取所有影院信息
    getCinemaActions({ commit, state },obj) {
      instance.get(`/gateway?cityId=${obj.cityId}&ticketFlag=1&k=909227`, {
        headers: {
          "X-Host": "mall.film-ticket.cinema.list"
        }
      }).then((res) => {
        commit("setCinemaList", res.data.data.cinemas);
      });
    }
  },
  getters: {
    filterListLength(state) {
      return state.cinemaList.filter((item, index) => index < 6);
    }
  }
}

export default module