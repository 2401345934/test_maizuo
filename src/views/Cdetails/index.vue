<template>
  <div class="Cdetails" v-if="list">
    <TopTitle @back="handlerBack">
      <div class="title" style="display: block">
      </div>
    </TopTitle>

    <div class="title">
      {{list.cinema.name}}
    </div>
    <div class="tags">
      <div class="tag" v-for="item in list.cinema.services">
        {{item.name}}
      </div>
      <i class="iconfont icon-more"></i>
    </div>

    <div class="address">
      <span class="iconfont icon-map"></span>
      <div>{{list.cinema.address}}</div>
      <span class="iconfont icon-phone"></span>
    </div>

    <div class="film-wrap" v-if="imgList">
      <div class="film-img">
      </div>

      <div class="film-list">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :touchable="true">
          <van-swipe-item><img :src="imgList.poster" alt=""></van-swipe-item>
          <van-swipe-item><img :src="imgList.poster" alt=""></van-swipe-item>
        </van-swipe>
      </div>

      <div class="film-info">
        <div class="film-info-t">
          <span class="span1">{{imgList.name}}</span>
          <span class="span2">{{imgList.grade}}</span>
          <span class="span3">分</span>
        </div>
        <div class="film-info-b">
          {{imgList.category}} {{imgList.runtime}} 分钟
          <i v-for="item in actors" :key="item.id">{{item}} | </i>
        </div>
      </div>

      <div class="film-footer">
        <div class="tabs-nav">
          <ul>
            <li>
              <span>周二3月31日</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="film-b">
        <div>
          <span class="iconfont icon-jifen"></span>
        </div>
        <p>暂无场次</p>
      </div>
    </div>

  </div>

</template>

<script>
  import { instance } from "@/utils/http";
  import Vue from "vue";
  import { Swipe, SwipeItem } from "vant";

  Vue.use(Swipe);
  Vue.use(SwipeItem);
  export default {
    name: "index",
    data() {
      return {
        list: null,
        imgList: null,
        actors: null,
      };
    },
    methods: {
      handlerBack() {
        this.$router.back();
      }
    },
    created() {

      instance.get(`/gateway/?cinemaId=${this.$route.params.id}&k=9349036`, {
        headers: {
          "X-Host": "mall.film-ticket.cinema.info"
        }
      }).then((res) => {
        this.list = res.data.data;
        console.log(this.list);
      });


      instance.get(`/gateway/?cinemaId=1000&k=6505810`, {
        headers: {
          "X-Host": "mall.film-ticket.film.cinema-show-film"
        }
      }).then((res) => {
        this.imgList = res.data.data.films[0];
        this.actors = this.imgList.actors
        this.actors = this.actors.map((item) => item.name)
        console.log(this.imgList);
      });
    }
  };
</script>

<style scoped lang="scss">
  .Cdetails {
    height: 100%;

    .film-b {
      height: 1.80rem;
      padding: 0.40rem 0 0.44rem;
      div {
        height: 0.70rem;
        width: 0.70rem;
        margin: 0 auto 0.10rem;
        span {
          font-size: .5rem;
          position: relative;
          left: .1rem;
        }
      }

      p {
        text-align: center;
        color: #bdc0c5;
        font-size: 0.14rem;
      }
    }

    .film-footer {
      position: relative;
      z-index: 100;
      width: 100%;
      overflow-x: hidden;
      background: #fff;
      .tabs-nav {
        height: 49px;
        display: flex;
        align-items: center;
        overflow-x: auto;
        overflow-y: hidden;
        transition: transform .2s cubic-bezier(.35,0,.25,1);
        position: relative;
      }
        ul {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          width: 100%;
          li {
            color: #ff5f16;
            padding: 0px 15px;

          }
        }
      }
    }

    .film-info {
      width: 100%;
      background: #fff;
      height: 0.80rem;
      padding: 0.15rem 0;
      position: relative;
      .film-info-t {

        margin-bottom: 0.10rem;
        text-align: center;
        line-height: 0.18rem;
        .span1 {
          font-size: 0.15rem;
          color: #191a1b;
          padding-right: 0.05rem;
        }

        .span2 {
          font-size: 0.16rem;
          font-style: italic;
          color: #ffb232;
        }
        .span3 {
          font-size: 0.10rem;
          color: #ffb232;
        }
      }
      .film-info-b {
        text-align: center;
        height: 0.18rem;
        color: #797d82;
        font-size: 0.13rem;
        padding: 0 12%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

  .film-wrap {
    position: relative;
    min-height: 2.60rem;

  }

  .film-img {
    position: absolute;
    top: 0;
    height: 1.60rem;
    width: 100%;
    padding: 0.15rem 0;
    overflow: hidden;
    -webkit-filter: blur(0.30rem);
    filter: blur(0.30rem);
    background: #eee;
  }

  .film-list {
    height: 1.60rem;
    padding: 0.15rem 0;
    position: relative;
    z-index: 5;
    img {
      height: 1.2rem;
      width: 0.9rem;
      margin: auto;
    }

  }

  .address {
    height: 0.50rem;
    position: relative;
    display: flex;
    padding: 0 0.17rem;
    align-items: center;

    span {
      font-size: 0.2rem;
    }

    div {
      font-size: 0.14rem;
      height: 0.20rem;
      padding: 0 0.12rem;
      flex: 1;
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .title {
    position: relative;
    text-align: center;
    font-size: 0.17rem;
    color: #191a1b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    padding: 0 0.15rem;
    background: #fff;
    top: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    z-index: 11;
    margin-top: .4rem;
  }

  .tags {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 0.15rem;
    padding: 0.05rem 0 0.15rem;
    color: #ffb232;
    overflow: hidden;
    position: relative;
    i {
      position: absolute;
      right: 0.09rem;
      top: 0.07rem;
    }

    .tag {
      position: relative;
      padding: 0 0.06rem;
      margin: 0 0.025rem;
      font-size: 0.1rem;
    }

  }

</style>