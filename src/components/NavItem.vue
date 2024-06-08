<template>
  <div class="nav-item" @click="handleClick">
    <div>第{{ title.sn }}象</div>
    <div>{{ title.ganZhi }}</div>
  </div>
</template>

<script lang="ts" setup>
import {ITitle} from "@/types/data"

const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
defineProps({
  title: {
    type: Object as () => ITitle,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.nav-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 8px 0;
  width: 32px;
  height: 128px;
  background: transparent;
  border: 1px solid $color-dark;
  color: $color-dark;
  font-size: 14px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease .6s;

  &:hover {
    background: $color-dark;
    color: #fff;
    transform: scale(1.3);
    z-index: 999;
  }

  div {
    width: 16px;
  }
}

.active {
  background: $color-red;
  color: #fff;
  border: none;


  &:hover {
    background: $color-red;
  }
}
</style>
