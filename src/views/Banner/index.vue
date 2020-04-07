<template>
  <div id="banner">
    <div class="t">
      <div class="y">
        <span @click="$router.push('/city')">{{ctiy.name}}</span>
        <i class="iconfont icon-moreunfold"></i>
      </div>
      <swiper cName="swipe1">
        <div class="swiper-slide" v-for="(item,index) in bList" :key="item.bannerId"
             v-swiper="{ current:index, length:banner.length , swipe:'swipe1' }"
             style="min-width: 3.75rem;min-height: 2.10rem">
          <img :src="item.imgUrl" alt="">
        </div>
      </swiper>
    </div>


    <ul class="list">
      <router-link :to="{name:item.name}" v-for="(item,index) in list " :key="item.id" tag="li">
        <span>{{item.txt}}</span>
      </router-link>
    </ul>

    <router-view></router-view>

  </div>
</template>

<script>
  import swiper from "con/Swiper";
  import { instance } from "@/utils/http";
  import { mapState, mapActions  , mapGetters} from "vuex";

  export default {
    name: "index",
    components: {
      swiper
    },
    data() {
      return {
        banner: [],
        list: [
          { txt: "正在热映", name: "Received" },
          { txt: "即将上映", name: "Release" }
        ]
      };
    },
    created() {
      this.getBanner();
    },
    mounted(){
    },
    computed: {
      ...mapState("banner", ["ctiy","bannerList"]),
      ...mapGetters("banner", ["bList"])
    },
    methods: {
      ...mapActions("banner", ["getBanner"])
    }

  };
</script>

<style scoped lang="scss">
  #banner {

    .t {
      position: relative;

      .y {
        position: absolute;
        top: 0.18rem;
        left: 0.07rem;
        color: #fff;
        z-index: 10;
        font-size: 0.13rem;
        background: rgba(0, 0, 0, .2);
        height: 0.30rem;
        line-height: 0.30rem;
        border-radius: 0.15rem;
        text-align: center;
        padding: 0 0.05rem;
        span {

        }
        i {

        }
      }
    }

    height: 100%;

    img {
      width: 100%;
    }

    .list {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .3rem;
      li {
        flex: 1;
        background: deepskyblue;
        display: flex;
        justify-content: center;
        align-items: center;
        color: greenyellow;
      }

      .router-link-exact-active {
        background: red;
        color: #fff;
      }
    }
  }

</style>