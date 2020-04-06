<template>
  <div class="main">
   <div class="top">
     <div class="btns">
       <van-button type="primary" @click="tiao" v-if="!token">立即登录</van-button>
       <van-button type="danger"  @click="open" v-else>退出</van-button>
     </div>
   </div>
    <ul class="list">
      <li v-for="item in list">
        <span class="iconfont " :class="item.icon"></span>
        <p>{{item.txt}}</p>
      </li>
    </ul>


    <van-cell-group class="cell">
      <van-cell title="卖座卷" is-link icon="vip-card-o" />
      <van-cell title="红包" is-link icon="bill-o" />
      <van-cell title="余额" is-link icon="gift-o"  value="$ 0"/>
      <van-cell title="设置" is-link icon="setting-o" />
    </van-cell-group>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Notify } from 'vant';

  Vue.use(Notify);
  export default {
    name: "index",
    data() {
      return {
        token: "",
        value: 3,
        list: [
          {txt: '电影订单' , icon: 'icon-calendar'},
          {txt: '商品订单' , icon: 'icon-rfq'},
        ]
      };
    },
    methods: {
      tiao() {
        this.$router.push("/login");
      },

      open() {
        if (localStorage.getItem("token")) {
          localStorage.clear();
          Notify({ type: 'success', message: '退出成功' });
          this.token = ""
        } else {
          Notify({ type: 'warning', message: '您还没有登录' });
        };

      }
    },
    created() {
      if (localStorage.getItem("token")) {
        this.token = localStorage.getItem("token");
      } else {
        this.token = "";
      }
      ;
    }
  };
</script>

<style scoped lang="scss">

  .main {
    height: 100%;

    .top {
      text-align: center;
      height: 2rem;
      padding-left: 0.52rem;
      background: url(../../assets/bg.6837f67.png);
      background-size: cover;
      line-height: 2rem;
      color: #fff;

      .btns {
        display: flex;
        align-items: center;
        height: 2rem;
        line-height: 2rem;
        margin-left: 1rem;
      }
    }

    .list {
      width: 100%;
      margin: 0 auto;
      display: flex;
      text-align: center;
      font-size: 0.13rem;
      padding: 0;
      height: 0.79rem;
      margin-bottom: 0.1rem;
      align-items: center;
      overflow: hidden;
      li {
        font-size: 0.2rem;
        position: relative;
        flex: 1;
        list-style: none;
        span {
          color: yellowgreen;
          font-size: 0.3rem;
        }
      }
    }

    .cell {
      .van-cell__title {
        font-size: 0.18rem !important;
        padding: 0 0.15rem;
      }
      .van-cell__left-icon {
        font-size: 0.28rem !important;
      }
    }

  }
</style>