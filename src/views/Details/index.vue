<template>
  <div class="app">
    <div class="title">
      <span @click="$router.push('/city')" class="span4">{{ctiyArr.name}} <span class="iconfont icon-back"></span> </span>
      <span>影院</span>
      <span class="iconfont icon-search title-b" @click="handlerSearch"></span>
    </div>
    <div class="select">
      <div @click="isAreaList =!isAreaList ; isClass = !isClass" :class="isClass ? 'curt' :'' ">全城 <span
              class="iconfont icon-moreunfold"></span></div>
      <div>App订票<span class="iconfont icon-moreunfold"></span></div>
      <div>最近去过<span class="iconfont icon-moreunfold"></span></div>
    </div>

    <div style="height: 0.95rem;"></div>

    <div class="content">
      <ul>
        <MoveList :MoveList="listArr"></MoveList>
      </ul>
    </div>


    <!--切换城市-->
    <div class="ciname-List" v-show="isAreaList">
      <ul>
        <li v-for="item in areaList" :key="item.id" @click="changeCurrent(item) ; isCurrentShow=!isCurrentShow"
            :class="{'current':item === current}">
          {{ item }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import { instance } from "@/utils/http";
  import MoveList from "@/components/MovieList";
  import { mapState , mapActions } from "vuex";

  export default {
    name: "index",
    components: {
      MoveList
    },
    data() {
      return {
        isAreaList: false,
        current: "全城",
        isClass: false,
        isCurrentShow: false
      };
    },
    methods: {
      handlerSearch() {
        this.$router.push("/search");
      },
      changeCurrent(val) {
        this.current = val;
        this.isAreaList = false;
      },
      ...mapActions("moveList",["getCinemaActions"])
    },
    created() {
        this.getCinemaActions(this.ctiyArr);
      ;
    },
    computed: {
      ...mapState( "moveList" ,["cinemaList"]),
      ...mapState("ctiy",["ctiyArr"]),
      areaList() {
        let newArr = this.cinemaList.map((item) => item.districtName);
        let tmpArr = ["全城", ...Array.from(new Set(newArr))];
        return tmpArr;
      },
      listArr() {
        if (this.current === "全城") return this.cinemaList;
        let arr = this.cinemaList.filter((item) => item.districtName === this.current);
        return arr;
      }
    }
  };
</script>

<style scoped lang="scss">

  .app {

    .span4 {
      display: inline-block;
      font-size: 0.13rem;
      max-width: 0.58rem;
      height: 0.16rem;
      line-height: 0.16rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-right: 0.05rem;
      color: #191a1b;
    }

    .curt {
      color: orangered !important;
    }

    .current {
      color: orangered !important;
      border: 1px solid orangered !important;
    }

    .ciname-List {
      position: fixed;
      top: 0.94rem;
      z-index: 5;

      ul {
        padding-left: 0.1rem;
        margin-right: 0.1rem;
        display: flex;
        justify-content: space-between;
        align-content: center;
        flex-wrap: wrap;
        background: #fff;

        li {
          width: calc((100vw - 0.5rem) / 4);
          border: 1px solid #eee;
          text-align: center;
          margin-bottom: 0.20rem;
          height: 0.45rem;
          line-height: 0.45rem;
        }
      }
    }

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.44rem;
      line-height: 0.44rem;
      padding: 0 0.15rem;
      font-size: 0.18rem;
      position: fixed;
      top: 0;
      z-index: 5;
      width: 100%;
      background: #fff;

      .title-b {
        font-size: 0.22rem;
        color: #000;
      }
    }

    .select {
      position: fixed;
      top: 0;
      background: #fff;
      margin-top: 0.44rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      z-index: 5;
      height: 0.5rem;
      div {
        text-align: center;
        width: 33.33%;
        height: 0.49rem;
        line-height: 0.49rem;
      }
    }

    .content {

      ul {

      }
    }

  }

</style>