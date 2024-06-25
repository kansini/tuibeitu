<template>
  <div class="detail-item">
    <div class="detail-content">
      <div class="figure">
        <img :src="`./img/figure${index + 1}.svg`" alt="">
      </div>
      <div class="detail-content-desc">
        <tb-poem :poem="detail.poem?.predict"/>
        <tb-poem title="颂曰" :poem="detail.poem?.description"/>
        <tb-title :title="detail.title"/>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import TbTitle from '@/components/Title.vue'
import TbPoem from '@/components/Poem.vue'
import {IItem} from "@/types/data";

defineProps({
  index: {
    type: Number,
    default: 0
  },
  detail: {
    type: Object as () => IItem,
    default: () => {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped>
.detail-item {
  width: 100%;

  .detail-content {
    height: 520px;
    margin: calc(50vh - 260px) auto 40px auto;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;

    .figure {
      width: 520px;
      height: 520px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $base-bg;
      border-radius: 12px;

      img {
        display: block;
        transition: all ease .6s;
        // cursor: pointer;
        height: 240px;

        &:hover {
          transform: scale(1.4);
        }
      }
    }

    .detail-content-desc {
      display: flex;
    }
  }

  @media (max-width: 750px) {
    .detail-content {
      flex-direction: column;

    }
  }
}


</style>
