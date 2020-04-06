import Vue from "vue";
import Swiper from "swiper";

//轮播图 指令 v-swiper   current 总共有多少个图片   === length 数组的长度  就开始实例化
// swipe 给元素另外起一个class 名字  避免冲突
Vue.directive("swiper", {
  inserted(el, binding, vnode) {
    if (binding.value.current === binding.value.length - 1) {
      new Swiper("." + binding.value.swipe, {
        loop: true,
        autoplay: true,
        observer: true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  }
});



//滚动事件指令 通过v-title  px控制滚动到多少触发事件
Vue.directive("title", {
  inserted(el, binding, vnode) {
    window.onscroll = () => {
      if ( document.body.scrollTop || document.documentElement.scrollTop > binding.value.px) {
        el.style.display = "block"
      } else {
        el.style.display = "none"
      }
      ;
    };
  },
  unbind(el, binding, vnode) {
    window.onscroll = null;
  }
});