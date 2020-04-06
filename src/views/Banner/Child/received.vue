<template>
  <div id="received">
    <ul>
      <router-link tag="li" v-for="(item,index) in infoList" :key="item.filmId "
                   :to="{name:'Information' ,params:{id:item.filmId} }">
        <div class="liwrap">
          <div class="left"><img :src="item.poster" alt=""></div>
          <div class="right">
            <h4>{{item.name}}</h4>
            <p>观众评分 : {{item.grade}}</p>
            <p>主演 {{item.actors | actorsArr}}</p>
          </div>
        </div>
      </router-link>
    </ul>

  </div>
</template>

<script>
  import { instance } from "@/utils/http";
  import "@/utils/filter";
  import { mapState , mapActions , mapMutations } from "vuex";

  export default {
    name: "received",
    data() {
      return {
        list: []
      };
    },
    computed: {
      ...mapState("banner",["infoList"])
    },
    methods: {
      ...mapActions("banner",['getInfoList']),
    },
    created() {
      this.getInfoList()
    },
    mounted() {
      // instance.get("/gateway?cityId=310100&pageNum=2&pageSize=10&type=1&k=7123158", {
      //   headers: {
      //     "X-Host": "mall.film-ticket.film.list"
      //   }
      // }).then((res) => {
      //   window.onscroll = () => {
      //     if (document.documentElement.scrollTop > 550) {
      //       this.list.push(...res.data.data.films);
      //       window.onscroll = null;
      //     } else {
      //     };
      //   };
      // });


    },
    beforeDestroy() {
      window.onscroll = null;
    }
  };
</script>

<style scoped lang="scss">
  [v-cloak] {
    display: none;
  }

  #received {
    height: 100% !important;
    background: #fff;
    padding-bottom: 15px;
  }
  li {
    padding: 15px;
    height: 1rem;
    position: relative;

    .liwrap {
      display: flex;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;

    }
    .left {
      position: relative;
      display: block;
      width: 0.66rem;
      height: 0.94rem;
      background: rgb(249, 249, 249);
      opacity: 1;
      float: left;
    }
    img {
      width: 100%;
      position: absolute;
    }

    .right {
      width: calc(100% - 1.16rem);
      padding: 0 0.1rem;

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
      }
    }

    h4 {
      max-width: calc(100% - 0.25rem);
      color: #191a1b;
      font-size: 0.16rem;
      height: 0.22rem;
      line-height: 0.22rem;
      margin-right: 0.05rem;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

  }
</style>