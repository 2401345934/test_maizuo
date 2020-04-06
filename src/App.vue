<template>
  <div id="app">
    <transition name="app" mode="out-in">
      <router-view/>
    </transition>
    <Nav v-show="$store.state.nav.isNav"></Nav>

  </div>
</template>
 
<script>
  import Nav from "@/views/Nav";

  export default {
    name: "App",
    components: {
      Nav
    },
    data(){
      return {
      }
    },
    mounted(){
    }

  };
</script>

<style lang="scss">

  .app-enter-active {
    animation: move .5s;
  }

  .app-leave-active {
    animation: move .5s reverse;
  }

  @keyframes move {
    0% {
      opacity: 0;
      transform: translateY(0.5rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }


</style>
