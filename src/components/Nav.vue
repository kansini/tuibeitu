<template>
  <transition name="fadeRight">
    <div class="nav-container" v-if="visible">
      <div class="nav-content">
        <nav-item
            v-for="(item,index) in data"
            :title="item.title"
            :class="{active:index === detailIndex}"
            @click="handleClick(index)"
            :key="index"
        />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import navItem from "./NavItem.vue";
import {IItem} from "@/types/data";

const visible = defineModel()
const emit = defineEmits(['click'])
const handleClick = (index: number) => {
  emit('click', index)
}

defineProps({
  data: {
    type: Array as () => IItem[],
    default: () => {
      return []
    }
  },
  detailIndex: {
    type: Number,
    default: 0
  }
})
</script>
<style lang="scss" scoped>
.nav-container {
  position: fixed;
  width: 360px;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  box-shadow: 0 0 20px 0 $color-light;
  overflow-y: auto;
  z-index: 1000;
  background: #fff;

  .nav-content {
    display: flex;
    flex-wrap: wrap;
    width: 312px;
    gap: 8px;
  }
}

</style>

