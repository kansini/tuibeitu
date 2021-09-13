<template>
  <div class="detail">
    <oh-cursor :size="cursorSize"/>
    <tb-nav :visible.sync="showNav" :data="detail" :detail-index="detailIndex" @click="nav"/>
    <transition name="slideIn">
      <div class="intro" v-if="showIntro">
        <intro @close="showIntro = false"/>
      </div>
    </transition>
    <div :class="{blur:showIntro}">
      <div class="tool-bar" @mouseover="cursorSize = 'small'" @mouseleave="cursorSize = ''">
        <div class="btn-nav" @click="showNav = true"></div>
        <div class="btn-home" @click="$router.push('/')"></div>
        <div class="btn-fullscreen" :class="{isFullscreen:isFullscreen}" @click="toggleFullscreen"></div>
        <div class="btn-tips" @click="showIntro = true"></div>
        <a href="https://github.com/kansini/tuibeitu" target="_blank" class="btn-github"></a>
      </div>
      <detail-item :detail="detail[detailIndex]" :index="detailIndex" @onFigure="cursorSize = 'large'"
                   @leaveFigure="cursorSize = ''"/>
      <div class="btn-group" @mouseover="cursorSize = 'small'" @mouseleave="cursorSize = ''">
        <tb-button @click="pre" direction="top" text="上一象"/>
        <tb-button @click="next" direction="bottom" text="下一象"/>
        <tb-button
            class="font-icons"
            @click="togglePlay"
            :text="playMsg">

        </tb-button>

      </div>
    </div>
  </div>

</template>

<script>
import fullscreen from 'screenfull'
import ohCursor from '@/components/kits/cursor'
import detailItem from '@/components/DetailItem'
import tbNav from '@/components/Nav'
// import navItem from '@/components/NavItem'
import intro from '@/components/Intro'
import tbButton from '@/components/kits/Button'

export default {
  name: "detail",
  components: {
    detailItem,
    tbNav,
    // navItem,
    intro,
    tbButton,
    ohCursor
  },

  data() {
    return {
      isFullscreen: false,
      detailIndex: 0,
      showNav: false,
      showIntro: false,
      detail: [],
      playMsg: 'play_arrow',
      autoplayFlag: false,
      cursorSize: ''
    }
  },
  created() {
    this.getDetail()
  },
  computed: {},
  methods: {
    getDetail() {
      this.$axios.get('poem.json')
          .then(res => this.detail = res.data)
    },
    pre() {
      if (this.detailIndex > 0) {
        this.detailIndex -= 1
      } else {
        this.detailIndex = this.detail.length - 1
      }

    },
    next() {
      if (this.detailIndex < this.detail.length - 1) {
        this.detailIndex += 1
      } else {
        this.detailIndex = 0
      }
    },
    togglePlay() {
      this.autoplayFlag = !this.autoplayFlag
      if (this.autoplayFlag) {
        this.playMsg = 'pause'
      } else {
        this.playMsg = 'play_arrow'
      }
    },
    nav(index) {
      this.showNav = false
      this.detailIndex = index
    },
    toggleFullscreen() {
      fullscreen.toggle()
      this.isFullscreen = !this.isFullscreen
    },
    handleSpeak(str) {
      let url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text" + encodeURI(str)
      let n = new Audio(url)
      n.src = url

      if (str) {
        n.play()
      } else {
        n.pause()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background: #fff;
}

.detail {

  .nav {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: fixed;
    width: 360px;
    height: 100vh;
    top: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 0 100px 0 $color-light;
    z-index: 1000;
    padding: 8px;
    box-sizing: border-box;
  }

  .intro {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    background: rgba(255, 255, 255, .85);
    z-index: 1000;
    padding: 16px 128px;
    box-sizing: border-box;
  }


  .tool-bar {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 64px;
    padding: 16px;
    box-sizing: border-box;
    z-index: 999;

    [class^='btn-'] {
      width: 24px;
      height: 24px;
      cursor: pointer;
      opacity: .8;
      transition: all ease .4s;

      &:not(:last-child) {
        margin-right: 16px;
      }

      &:hover {
        opacity: 1;
        // transform: scale(1.1);
      }
    }

    .btn-home {
      background: url("../assets/img/ico-context.svg") no-repeat center;
      background-size: auto 100%;
    }

    .btn-fullscreen {
      background: url("../assets/img/ico-fullscreen.svg") no-repeat center;
      background-size: auto 100%;
    }

    .btn-nav {
      background: url("../assets/img/ico-nav.svg") no-repeat center;
      background-size: auto 100%;
    }

    .btn-tips {
      background: url("../assets/img/ico-tip.svg") no-repeat center;
      background-size: auto 100%;
    }

    .btn-github {
      background: url("../assets/img/logo-gihub.svg") no-repeat center;
      background-size: auto 100%;
    }


    .isFullscreen {
      background: url("../assets/img/ico-exitFullscreen.svg") no-repeat center;
      background-size: auto 100%;
    }
  }

  .btn-group {
    position: fixed;
    align-items: center;
    left: 0;
    bottom: 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 999;

    button:not(:last-child) {
      margin-right: 64px;
    }


    .btn-play {
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 40px;
      color: #fff;
      background: $color-red;
      transition: all ease .4s;
      text-align: center;
      font-size: 30px;
      cursor: pointer;

      &:hover {
        color: #fff;
        background: $color-red;
      }

    }

    .disable {
      opacity: .3;
      cursor: not-allowed;

      &:hover {
        background: transparent;
        color: $color-red;
      }
    }
  }

  .blur {
    filter: blur(10px);
  }
}

</style>
