<template>
  <div id="app">
    <div class="top">
      <div class="toBack" @click="tiao"><span class="iconfont icon-back"></span></div>
        <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {};
    },
    methods: {
      tiao() {
        this.$emit("back")
      }
    }
  };
</script>

<style scoped lang="scss">
  .top {
    position: fixed;
    top: 0;
    transition: all 1.3s ease !important;
    background-color: #fff;
    color: #191a1b;
    width: 100%;
    z-index: 10;
    .toBack {
      height: 0.3rem;
      position: absolute;
      top: 0.05rem;
      left: 0.05rem;
      line-height: 0.3rem;
      span {
        font-size: 0.3rem;
        color: red;
        font-weight: 700;
      }
    }

    .title {
      font-size: 0.17rem;
      line-height: 0.44rem;
      width: 100vw;
      text-align: center;
      display: none;
      transition: all 1.3s ease !important;
    }
  }
</style>