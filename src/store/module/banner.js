import { instance } from "@/utils/http";

const module = {
  state: {
    ctiy: {
      cityId: 310100,
      name: "上海",
      pinyin: "shanghai",
      isHot: 1
    },
    infoList: []
  },
  mutations: {
    setInfoList(state, data) {
      state.infoList = data
    },
    setCtiy(state,data) {
      state.ctiy = data;
    },
  },
  actions: {
    getInfoList({ commit, state }) {
      instance.get(`/gateway?cityId=${state.ctiy.cityId}&pageNum=1&pageSize=10&type=1&k=4518515`, {
        headers: {
          "X-Host": "mall.film-ticket.film.list"
        }
      }).then((res) => {
        commit("setInfoList", res.data.data.films);
        console.log(res.data.data.films);
      });
    }
  },
  getters: {},
  namespaced: true
};


export default module;