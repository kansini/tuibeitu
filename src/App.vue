<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"/>
    </transition>
  </div>
</template>
<script>


export default {
  name: 'App',
  components: {},
  data() {
    return {
      transitionName: 'slide-left',
      isGrow: false
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.path == '/') {
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>

<style lang="scss">
body {
  cursor: none;
  font-family: "xiaokai";
  // font-family: kangxizidianti;
}
</style>
