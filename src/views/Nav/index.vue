<template>
  <div id="app">
    <div class="footer"></div>
    <div class="wrap">
      <ul>
        <router-link v-for="item in list " :key="item.txt" :to="{name:item.name}" tag="li">
          <span class="iconfont" :class="item.icon"></span>
          <span> {{item.txt}}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        list: [
          { txt: "电影" , name: "Banner" , icon: "icon-all" },
          { txt: "影院" , name: "Details" , icon: "icon-cart" },
          { txt: "我的" , name: "My" , icon: "icon-account" },
        ]
      }
    }
  };
</script>

<style scoped lang="scss">
  #app {

    .wrap {
      position: fixed;
      bottom: 0;
      width: 100%;
      z-index: 5;
      height: 0.5rem;
      background: #fff;
      margin-top: 20px;
      color: #000;
      ul {
        display: flex;
        width: 100%;
        li {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 0.2rem;
          span {
            font-size: 0.2rem;
          }
        }

        .router-link-exact-active {
          color: red !important;
        }
      }

    }
    .footer {
      height: 0.55rem;
    }
  }
</style>