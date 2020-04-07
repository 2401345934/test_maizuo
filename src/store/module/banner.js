import { instance } from "@/utils/http";

const module = {
  state: {
    ctiy: {
      cityId: 310100,
      name: "上海",
      pinyin: "shanghai",
      isHot: 1
    },
    infoList: [],
    bannerList: []
  },
  mutations: {
    setInfoList(state, data) {
      state.infoList = data;
    },
    setCtiy(state, data) {
      state.ctiy = data;
    },
    setBannerList(state, data) {
      state.bannerList = data;
    }
  },
  actions: {
    getInfoList({ commit, state }) {
      instance.get(`/gateway?cityId=${state.ctiy.cityId}&pageNum=1&pageSize=10&type=1&k=4518515`, {
        headers: {
          "X-Host": "mall.film-ticket.film.list"
        }
      }).then((res) => {
        commit("setInfoList", res.data.data.films);
      });
    },
    getBanner({ commit , state }) {
      instance.get(`/gateway?type=2&cityId=${state.ctiy.cityId}&k=9356399`, {
        headers: {
          "X-Host": "mall.cfg.common-banner"
        }
      }).then((res) => {
        commit("setBannerList", res.data.data);
        console.log(res.data.data);
      });
    }
  },
  getters: {
    bList(state){
      return state.bannerList
    }
  },
  namespaced: true
};


export default module;