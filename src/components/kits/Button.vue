<template>
  <button
      class="tb-btn"
      @click="handleToButton"
      @mouseenter="handleMouseEnter"
  >
    <div>
      <span :data-text="text" :class="direction">
        {{ text }}
      </span>
    </div>
  </button>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '推開'
  },
  direction: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['click', 'mouseenter'])
const handleToButton = () => {
  emit('click')
}
const handleMouseEnter = () => {
  emit('mouseenter')
}
</script>

<style lang="scss" scoped>
button {
  border: none;
  outline: none;
  background: transparent;
  overflow: hidden;
}

.tb-btn {
  position: relative;
  padding: 8px 24px;
  min-width: 96px;
  border: 1px solid #D0021B;
  border-radius: 60px;
  color: #D0021B;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  transition: all ease .4s;
  font-family: inherit;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    left: 0;
    top: 0;
    background: #D0021B;
    opacity: 0;
    transition: all ease .4s;
  }

  &:hover {
    color: #fff;
  }

  &:hover::before {
    opacity: 1;
    width: 100%;
  }

  div {
    position: relative;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;

    span {
      position: relative;
      display: inline-block;
      transition: transform .4s;
      transform-origin: right top;

      &::after {
        content: attr(data-text);
        display: block;
        position: absolute;
        right: -150%;
        top: 0;
        transform: skewX(25deg);
        transition: transform 1s;
        transform-origin: right top;
      }
    }
  }

  &:hover span {
    transform: translateX(-150%);
  }

  &:hover span::after {
    transform: skewY(0deg);
  }

  .right {
    transform-origin: left top;

    &::after {
      left: -450%;
      top: 0;
    }
  }

  &:hover .right {
    transform: translateX(150%);
  }

  .top {
    transform-origin: left top;

    &::after {
      right: 0;
      top: -250%;
      transform: skewY(-15deg);
    }
  }

  &:hover .top {
    transform: translateY(250%);
  }

  .bottom {
    transform-origin: left top;

    &::after {
      right: 0;
      top: 250%;
      transform: skewY(15deg);
    }
  }

  &:hover .bottom {
    transform: translateY(-250%);
  }


}


</style>
