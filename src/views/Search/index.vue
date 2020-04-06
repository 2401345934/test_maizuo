<template>
  <div class="search">
    <div class="top">
      <div class="top-l">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="输入影城名称" v-model="msg">
        <span class="iconfont icon-close" v-if="msg" @click="msg = ''"></span>
      </div>
      <div class="top-r" @click="tiao">取消</div>
    </div>

    <div class="search-c" v-if="msg">
      <ul v-if="listArr.length">
        <MoveList :MoveList="listArr"></MoveList>
      </ul>
      <div v-else class="search-cc"><span class="iconfont icon-cry"></span>
        <p>提示：仅支持搜索“影院”，建议您检查输入的影院名称是否有误？ </p></div>
    </div>

    <div class="content" v-if="!msg">
      <h2>离你最近</h2>
      <ul>
        <li v-for="item in filterListLength" :key="item.cinemaId" @click="details(item.cinemaId)">
          <div>
            {{item.name}}
          </div>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
  //引入电影列表组件
  import MoveList from "@/components/MovieList";
  import { mapState , mapGetters , mapActions,mapMutations } from "vuex";

  export default {
    name: "index",
    components: {
      MoveList
    },
    data() {
      return {
        msg: ""
      };
    },
    computed: {
      ...mapState( "moveList" , ["cinemaList"]),
      ...mapState( "ctiy" , ["ctiyArr"]),
      ...mapGetters("moveList" ,["filterListLength"]),
      listArr() {
        return this.cinemaList.filter((item, index) =>
          item.name.includes(this.msg) ||
          item.name.toUpperCase().includes(this.msg.toUpperCase()) ||
          item.name.toLowerCase().includes(this.msg.toLowerCase()) ||
          item.address.includes(this.msg) ||
          item.address.toUpperCase().includes(this.msg.toUpperCase()) ||
          item.address.toLowerCase().includes(this.msg.toLowerCase())
        );
      }
    },
    methods: {
      tiao() {
        this.$router.back();
      },
      ...mapActions("moveList",["getCinemaActions"]),
      ...mapMutations("nav",["hide","show"]),
      details(id){
        this.$router.push(`/cdetails/${id}`)
      }
    },
    mounted() {
      this.hide();
        this.getCinemaActions(this.ctiyArr);
      ;
    },
    destroyed() {
      this.show();
    }
  };
</script>

<style scoped lang="scss">

  .search {
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: hidden;
  }

  .search-cc {
    position: absolute;
    top: 1.07rem;
    width: 100%;
    text-align: center;

    span {
      width: 90px;
      margin: auto;
      font-size: 1rem;
      color: red;
    }

    p {
      font-size: 0.11rem;
      color: #bdc0c5;
      padding: 0 22vw;
      margin-top: .3rem;
    }
  }

  .search-c {
    margin-top: 0.6rem;
    ul {
      li {
        padding: 0.15rem;
        position: relative;
        background-color: #fff;

        a {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .content-l {
            width: calc(100% - 0.65rem);
            text-align: left;
            padding-right: 0.15rem;
            float: left;

            .span1 {
              font-size: 0.15rem;
              float: left;
            }

            .span2 {
              color: #797d82;
              font-size: 0.12rem;
              margin-top: 0.05rem;
              display: block;
              max-width: 80%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              float: left;
            }
          }
          .content-r {
            width: 0.7rem;
            text-align: center;
            float: right;
            margin-right: -0.05rem;

            div {
              .upon1 {
                i {
                  font-size: 0.11rem;
                  font-style: normal;
                }
                font-size: 0.15rem;
                color: #ff5f16;
                height: 0 !important;
                display: inline-table !important;
                float: none !important;
              }
              .upon2 {
                color: #ff5f16;
                font-size: 0.1rem;
              }
            }

            .span3 {
              display: block;
              font-size: 0.11rem;
              color: #797d82;
              margin-top: 0.05rem;

              strong {
                display: block;
                margin-top: 0.05rem
              }
            }
          }
        }
      }
    }

  }

  .top {
    z-index: 10;
    height: 0.49rem;
    width: 100vw;
    padding: 0.095rem 0.15rem;
    background-color: #fff;
    position: fixed;

    .top-l {
      background-color: #f4f4f4;
      display: inline-block;
      position: relative;
      border-radius: 3px;
      height: 0.3rem;
      width: calc(100% - 0.43rem);

      i {
        position: absolute;
        left: 0.07rem;
        top: 0;
        line-height: 0.3rem;
        font-size: 0.21rem;
        color: #797d82;
      }

      span {
        position: absolute;
        right: 0.07rem;
        top: 0;
        line-height: 0.3rem;
        font-size: 0.21rem;
        color: #797d82;
      }
      input {
        position: absolute;
        left: 0.33rem;
        top: 0;
        height: 0.3rem;
        width: calc(100% - 0.65rem);
        border: 0;
        background: #f4f4f4;
      }
    }
    .top-r {
      width: 43px;
      position: absolute;
      display: inline-block;
      text-align: right;
      font-size: 14px;
      line-height: 30px;
    }
  }

  .content {
    margin-top: 0.6rem;

    h2 {
      font-size: 0.13rem;
      line-height: 0.13rem;
      color: #bdc0c5;
      margin: 0.38rem 0;
      margin-left: 0.2rem;
    }

    ul {
      padding: 0 0.15rem 0.8rem 0;
      margin-left: 0.15rem;
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: wrap;
      li {
        text-align: center;
        padding-bottom: 0.1rem;
        padding-right: 0.1rem;
        box-sizing: border-box;
        float: left;
        div {
          height: 0.3rem;
          background-color: hsla(0, 0%, 96%, .6);
          line-height: 0.14rem;
          border-radius: 0.03rem;
          -webkit-box-sizing: border-box;
          font-size: 0.13rem;
          padding: 0.08rem 0.12rem;
        }
      }
    }

  }


</style>