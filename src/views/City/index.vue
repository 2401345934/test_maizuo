<template>
  <div class="city">
    <TopTitle @back="handlerPhoto">
      <div class="title" style="display: block"> 当前城市</div>
    </TopTitle>

    <form>
      <van-search
              v-model="value"
              show-action
              placeholder="请输入搜索关键词"
              @search="onSearch"
              @cancel="onCancel"
              @input="onChange"
              autofocus="true"
              shape="round"
      />
    </form>
    <div class="content" v-show="!value">
      <van-index-bar :index-list="indexList">
        <template v-for="item in ctiyListArr">
          <van-index-anchor :index="item.index"/>
          <van-cell :key="res.ctiyId" :title="res.name" v-for="res in item.list" @click="handlerName(res)"/>
        </template>
      </van-index-bar>
    </div>
    <div v-if="value">
      <van-cell :key="item.ctiyId" :title="item.name" v-for="item in searchList" @click="handlerName(item)"/>
    </div>
    <div v-if="value && searchList.length === 0">
      <h1>您搜索的城市不存在</h1>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { IndexBar, IndexAnchor } from "vant";
  import { instance } from "@/utils/http";
  import { mapMutations } from "vuex";

  Vue.use(IndexBar);
  Vue.use(IndexAnchor);
  export default {
    name: "index",
    data() {
      return {
        ctiy: [],
        ctiyListArr: [],
        indexList: [],
        value: "",
        searchList: []
      };
    },
    methods: {
      ...mapMutations("ctiy", ["setCtiyArr"]),
      ...mapMutations("banner", ["setCtiy"]),
      handlerPhoto() {
        this.$router.back();
      },
      onSearch(val) {
        this.onChange()
      },
      onCancel() {
        this.value = "";
      },
      onChange() {
        let arr = this.ctiyListArr.map((item) => {
          return item.list;
        });

        function yiweiArr(arr) {
          while (arr.some((item) => Array.isArray(item))) {
            arr = [].concat(...arr);
          }
          return arr;
        }

        let tmp = yiweiArr(arr);
        tmp = tmp.filter((item) => item.pinyin.includes(this.value));
        this.searchList = tmp;
      },
      handlerName(name) {
        this.setCtiyArr(name);
        this.setCtiy(name);

        this.$router.back();
      },
      ctiyFiter(arr) {
        let tmp = [];
        for (let i = 65; i < 91; i++) {
          tmp.push(String.fromCharCode(i));
        }
        let ctiyTmp = [];
        tmp.forEach((item, index) => {
          let tmpArr = arr.filter((res) => res.pinyin.slice(0, 1).toUpperCase() === item);
          ctiyTmp.push({
            index: tmp[index],
            list: tmpArr
          });
        });
        this.ctiyListArr = ctiyTmp;
        this.ctiyListArr = this.ctiyListArr.filter((item) => {
          if (item.list.length > 0) {
            return item;
          }
        });
        this.ctiyListArr.forEach((item) => {
          if (item.list.length > 0) {
            this.indexList.push(item.index);
          }
        });

      }
    },
    created() {
      instance.get("/gateway?k=1710908", {
        headers: {
          "X-Host": "mall.film-ticket.city.list"
        }
      }).then((res) => {
        this.ctiy = res.data.data.cities;
        this.ctiyFiter(this.ctiy);
      });

    },
    mounted() {
      this.$emit("changeList");
    },
    computed: {}
  };
</script>

<style scoped lang="scss">


  form {
    margin-top: 0.5rem !important;
  }

</style>