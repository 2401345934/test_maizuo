<template>
  <div>
    <div class="swiper-container " :class="cName">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import "swiper/css/swiper.min.css"
  export default {
    name: "index",
    props:["cName"]
  };
</script>

<style scoped>

</style>