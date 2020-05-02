<template>
  <div class="home">
    <div class="cover"></div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style lang="scss" scoped>
  .home{
    .cover{
      width: 100vw;
      height: 100vh;
      background: url("../assets/img/cover.svg") no-repeat center;
      background-size: 160px auto;
      animation: cover 2s linear forwards;
    }
  }
</style>
