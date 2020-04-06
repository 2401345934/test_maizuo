<template>
  <div v-if="filmObj" id="infoMation">
    <TopTitle @back="handlerBack">
      <div class="title" v-title="{px:40}">
        <div> {{filmObj.name}}</div>
      </div>
    </TopTitle>
    <div class="img-wrap">
      <img :src="filmObj.poster" alt="" style="min-width: 3.15rem;height: 2.10rem">
    </div>

    <div class="film-wrap">
      <div class="col">
        <div class="col-name">
          <span class="name">{{filmObj.name}}</span>
          <span class="item">{{filmObj.filmType.name}}</span>
        </div>
        <div class="col-r">
          <span class="col-r-1">{{filmObj.grade}}</span>
          <span class="col-r-2">分</span>
        </div>
      </div>
      <div class="film-category">
        {{filmObj.category}}
      </div>
      <div class="film-premiere-time">
        {{filmObj.premiereAt | dateTime}} 上映
      </div>
      <div class="film-nation-runtime">
        {{filmObj.nation}} | {{filmObj.runtime}} 分钟
      </div>

      <div class="film-synopsis" :style="{height:h,overflow:o}">
        {{filmObj.synopsis}}
      </div>
      <div class="toggle">
        <span class="iconfont " @click="toggle" :class="flag ? 'icon-icon-arrow-down': 'icon-shang'"></span>
      </div>

    </div>

    <div class="actors">
      <div class="actors-title-bar">
        <span>演员列表</span>
      </div>
      <ul class="actors-list" v-if="list">
        <li v-for="(item,index) in list" :key="item.name">
          <div class="actors-list-t">
            <img :src="item.avatarAddress" alt="">
          </div>
          <div class="actors-list-b">
            <span class="actors-list-b-s1">{{item.name}}</span>
            <span class="actors-list-b-s2">{{item.role}}</span>
          </div>
        </li>
      </ul>
      <p v-else style="padding-left: 15px;">暂无主演</p>
    </div>

    <div class="photos">
      <div class="photos-t">
        <span class=" photos-t-l">剧照</span>
        <span class=" photos-t-r" @click="photo = !photo ">全部
          <span v-if="this.filmObj.photos !== undefined" >( {{this.filmObj.photos.length }} )</span>
          <span v-else>( 0 )</span>

          <span
                class="iconfont zuo"></span></span>
      </div>
      <ul class="photos-b" v-if="photos" >
        <li v-for="(item,index) in photos" :key="item.id"  @click="changeShow(index)">
          <div>
            <img :src="item" alt="">
          </div>
        </li>
      </ul>
    </div>


    <m-Photo v-show="photo" :phtoChildList="photos" @changePhoto="isPhoto" @event="changeShow">

    </m-Photo>
  </div>

</template>

<script>
  import { instance } from "@/utils/http";
  import Photo from "@/views/Photo";
  import Vue from 'vue';
  import { ImagePreview } from 'vant';
  Vue.use(ImagePreview);
  export default {
    name: "index",
    props: ["id"],
    components: {
      "m-Photo": Photo
    },
    data() {
      return {
        filmObj: null,  // 整体数据
        list: null,    // 演员列表数组
        photos: null,  //剧照数组
        h: "0.37rem",   //切换按钮的样式
        o: "hidden",  //切换按钮的样式
        flag: true,//控制切换按钮
        photo: false
      };
    },
    methods: {
      toggle() {
        this.flag = !this.flag;
        if (this.flag) {
          this.h = "0.37rem";
          this.o = "hidden";
        } else {
          this.h = "";
          this.o = "auto";
        }
        ;

      },
      changeShow(i) {
        ImagePreview({
          images:this.photos,
          startPosition: i,
          onClose() {
          },
          closeable: true,
          closeIconPosition: "top-left"
        });
      },
      isPhoto() {
        this.photo = false
      },

      handlerBack() {
        this.$router.back();
      }

    },
    created() {
      instance.get(`/gateway?filmId=${this.id}&k=8014099`, {
        headers: {
          "X-Host": "mall.film-ticket.film.info"
        }
      }).then((res) => {
        this.list = res.data.data.film.actors;
        this.filmObj = res.data.data.film;
        this.photos = res.data.data.film.photos;
      });
    },
    mounted() {

    },
    beforeDestroy() {
    }
  };
</script>

<style scoped lang="scss">
  @import "sty/Information.scss";

</style>