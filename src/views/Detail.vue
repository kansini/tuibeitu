<template>
  <div class="detail">
    <tb-nav
        v-model="showNav"
        :data="detail"
        :detail-index="detailIndex"
        @click="nav"
    />
    <intro @close="showIntro = false" v-model="showIntro"/>
    <div class="tool-bar" @mouseover="cursorSize = 'small'" @mouseleave="cursorSize = ''">
      <div class="btn-nav" @click="showNav = true"></div>
      <div class="btn-home" @click="$router.push('/')"></div>
      <div class="btn-fullscreen" :class="{isFullscreen:isFullscreen}"></div>
      <div class="btn-tips" @click="showIntro = true"></div>
      <a href="https://github.com/kansini/tuibeitu" target="_blank" class="btn-github"></a>
    </div>
    <detail-item
        @click="showNav = false"
        :detail="detail[detailIndex]"
        :index="detailIndex"
    />
    <div class="btn-group" @mouseover="cursorSize = 'small'" @mouseleave="cursorSize = ''">
      <tb-button @click="pre" direction="top" text="上一象"/>
      <tb-button @click="next" direction="bottom" text="下一象"/>
    </div>
  </div>

</template>

<script lang="ts" setup>
import detailItem from '@/components/DetailItem.vue'
import tbNav from '@/components/Nav.vue'
import intro from '@/components/Intro.vue'
import tbButton from '@/components/kits/Button.vue'
import {onMounted, reactive, ref} from "vue";
import {getList} from "@/api/getList";

const isFullscreen = ref(false)
const detailIndex = ref(0)
const showNav = ref(false)
const showIntro = ref(false)
const detail = reactive<any[]>([])
const cursorSize = ref('')
const pre = () => {
  if (detailIndex.value > 0) {
    detailIndex.value -= 1
  } else {
    detailIndex.value = detail.length - 1
  }

}
const next = () => {
  if (detailIndex.value < detail.length - 1) {
    detailIndex.value += 1
  } else {
    detailIndex.value = 0
  }
}
const nav = (index: number) => {
  showNav.value = false
  detailIndex.value = index
}

const getDetail = () => {
  getList('poem.json').then((res: any) => {
    Object.assign(detail, res.data)
    console.log(res.data)
  })

}
onMounted(() => {
  getDetail()
})
</script>

<style lang="scss" scoped>
body {
  background: #fff;
}

.detail {
  .intro {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    background: rgba(255, 255, 255, .85);
    z-index: 1000;
    padding: 16px 128px;

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
    gap: 64px;

    .disable {
      opacity: .3;
      cursor: not-allowed;

      &:hover {
        background: transparent;
        color: $color-red;
      }
    }
  }

}

</style>
