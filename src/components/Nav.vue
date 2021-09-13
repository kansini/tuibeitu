<template>
  <transition name="slideIn">
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

<script>
import navItem from './NavItem'

export default {
  name: "TbNav",
  components: {
    navItem
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    visible: {
      type: Boolean,
      default: false
    },
    detailIndex: {
      type: Number,
      default: 0
    },

  },
  methods: {
    handleClick(index) {
      this.$emit('click', index)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
