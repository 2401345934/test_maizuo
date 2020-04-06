const module = {
  state: {
    ctiyArr: {    //默认设置为上海 防止报错 因为没有定位
      cityId: 310100,
      name: "上海",
      pinyin: "shanghai",
      isHot: 1,
    }
  },
  namespaced: true,
  mutations: {
    setCtiyArr(state, obj) {
      state.ctiyArr = obj;
    }
  }
};


export default module;