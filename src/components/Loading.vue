<template>
  <div class="page-container" style="text-align: center;">
    <div id="loading-panel">
      <h1><strong>Loading...</strong></h1>
      <h2><strong>{{ percent }}</strong></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      count: 0,
      percent: '',
      // imgArr: []
    }
  },
  mounted() {
    this.preload()
  },
  methods: {
    preload() {
      let imgArr = [
        "./img/figure1.svg",
        "./img/figure2.svg",
        "./img/figure3.svg",
        "./img/figure4.svg",
        "./img/figure5.svg",
        "./img/figure6.svg",
        "./img/figure7.svg",
        "./img/figure8.svg"
      ]

      for (let img of imgArr) {
        let image = new Image()
        image.src = img
        image.onload = () => {
          this.count++
          // 计算图片加载的百分数，绑定到percent变量
          let percentNum = Math.floor(this.count / imgArr.length * 100)
          this.percent = `${percentNum}%`
        }
      }
    },

  }

}
</script>
