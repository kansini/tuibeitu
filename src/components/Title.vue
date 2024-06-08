<template>
  <div class="title">
    <div class="title-item">
      <div>第{{ title.sn }}象</div>
      <div>{{ title.ganZhi }}</div>
    </div>
    <div class="title-item">
      <div>{{ title.hexagrams1 }}</div>
      <div>{{ title.hexagrams2 }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ITitle} from "@/types/data";

defineProps({
  title: {
    type: Object as () => ITitle,
    default: () => {
      return {
        "sn": "二",
        "ganZhi": "乙丑",
        "hexagrams1": "巽下乾上",
        "hexagrams2": "姤"
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 64px;
  height: 520px;
  background: $color-red;
  color: #fff;
  font-size: 24px;
  margin: 0 40px;
  box-sizing: border-box;
  text-align: center;

  &::before {
    display: block;
    content: '';
    width: 64px;
    height: 16px;
    border-bottom: 4px solid #fff;
    background: $color-red;
    box-sizing: border-box;

  }

  &::after {
    content: '';
    width: 64px;
    height: 32px;
    background: $color-red;
    border-top: 4px solid #fff;
    box-sizing: border-box;
  }

  .title-item {
    width: 20px;

    div:nth-child(1) {
      margin-bottom: 16px;
    }
  }
}
</style>
