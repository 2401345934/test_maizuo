import Vue from "vue";
import moment from "moment";

//定义演员列表过滤器
Vue.filter("actorsArr", (data) => {
  if (data) {
    return data.map((item) => item.name).join("  ");
  } else {
    return "暂无主演";
  }
});



//定义日期的过滤器
Vue.filter("dateTime", (data) => {
  return moment(data * 1000).format("YYYY-MM-DD");  //moment 参数是时间戳
});


