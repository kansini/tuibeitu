<template>
  <transition name="fadeRight">
    <div class="nav" v-if="visible">
      <nav-item
          v-for="(item,index) in data"
          :title="item.title"
          :class="{active:index === detailIndex}"
          @click="handleClick(index)"
          :key="index"
      />
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

