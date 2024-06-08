<template>
  <div class="home">
    <tb-cursor :size="cursorSize" :text="cursorText"/>
    <div class="cover" ref="cover" @mouseenter="cursorSize = 'large'"></div>
    <div class="btn-group" ref="btn">
      <tb-button
          @mouseenter="cursorSize = 'small'"
          @click="handleEnter"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import TbButton from "@/components/kits/Button.vue";
import TbCursor from "@/components/kits/CustomCursor.vue";

const cursorSize = ref('large')
const cursorText = ref('「推背圖」·李淳風 ｜ 袁天罡·「推背圖」·李淳風 ｜ 袁天罡·')

const router = useRouter()
const handleEnter = () => {
  router.push('/detail')
}
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background: $base-bg;

  .cover {
    position: absolute;
    width: 296px;
    height: 280px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url("../assets/img/cover.svg") no-repeat center;
    background-size: 100%;
    animation: cover 1s linear forwards;
  }

  .btn-group {
    position: fixed;
    align-items: center;
    left: 0;
    bottom: 56px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 999;

    div:not(:last-child) {
      margin-right: 64px;
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


}

@keyframes cover {
  0% {
    opacity: 0;
    background-size: 0 auto;
  }
  80% {
    opacity: 1;
    background-size: 96px auto;
  }
  100% {
    background-size: 240px auto;
  }
}
</style>
