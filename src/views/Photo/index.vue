<template>
  <div class="photo">

    <TopTitle @back="handlerPhoto">
      <div class="title" style="display: block">
        <div> 剧照
          <span v-if="phtoChildList">( {{  phtoChildList.length}} )</span>
          <span v-else>( 0 )</span>

        </div>
      </div>
    </TopTitle>
    <ul>
      <li v-for="(item,index) in phtoChildList" @click="changeEmit(index)">
        <img :src="item" alt="">
      </li>
    </ul>


  </div>
</template>

<script>
  import Vue from 'vue';
  import { ImagePreview } from 'vant';
  Vue.use(ImagePreview);
  export default {
    name: "index",
    props: ["phtoChildList"],
    data() {
      return {
        isShow: false,
      };
    },
    methods: {
      handlerPhoto() {
        this.$emit("changePhoto");
      },
      changeEmit(i) {
        this.$emit("event",i)
      }
    },
  };
</script>

<style scoped lang="scss">

  .photo {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 15;
    overflow-y: auto;
    overflow-x: hidden;
  }

  ul {
    width: 100%;
    margin-top: 50px;

    li {
      width: 33.33%;
      float: left;
      height: 100%;
      padding: 2px;
      img {
        width: 1.24rem;
        height: 1.24rem;
      }
    }
  }

</style>