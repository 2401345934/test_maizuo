<template>
  <div id="received">
    <ul>
      <router-link tag="li" v-for="(item,index) in list" :key="item.filmId "
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
    <div class="no-more">- 无更多电影 -</div>
  </div>
</template>

<script>
  import { instance } from "@/utils/http";

  import "@/utils/filter";

  export default {
    name: "Release",
    data() {
      return {
        list: [],
      }
    },
    created(){
      instance.get("/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=1880554",{
        headers: {
          "X-Host": "mall.film-ticket.film.list"
        }
      }).then((res) => {
        this.list = res.data.data.films;
      })
    },
  };
</script>

<style scoped lang="scss">
  #received {
    height: 100% !important;
    background: #fff;
    padding-bottom: 15px;
  }

  .no-more {
    height: 0.59rem;
    background-color: #ededed;
    color: #bdc0c5;
    font-size: 0.13rem;
    text-align: center;
    margin: auto;
    margin-top: 0.2rem;
    line-height:0.59rem;
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