<template>
 <div>
   <li v-for="item in MoveList" :key="item.id">
     <a href="javascript:;">
       <div class="content-l">
         <span class="span1">{{item.name}}</span>
         <span class="span2">{{item.address}}</span>
       </div>
       <div class="content-r">
         <div>
                <span class="upon1">
                  <i>￥</i>
                  <span class="number">
                    {{item.lowPrice / 100}}
                  </span>
                </span>
           <span class="upon2">起</span>
         </div>
         <span class="span3">
                <strong>距离未知</strong>
              </span>
       </div>
     </a>
   </li>
 </div>
</template>

<script>
  export default {
    name: "index",
    props:["MoveList"],
    created(){
    }
  };
</script>

<style scoped lang="scss">
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
</style>