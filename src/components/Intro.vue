<template>
  <transition name="fadeDown">
    <div class="intro-container" v-if="show">
      <div class="title">【簡介】</div>
      <p>
        『推背圖』被稱作中華預言第一奇書，傳說它是唐太宗李世民為推算大唐國運，下令當時兩位著名的道士袁天罡和李淳風編寫的。
      </p>
      <p>
        傳說此袁李二人精通陰陽八卦奇門術數，道術高深，並具有洞察未來的「天眼神通」。因李淳風夜觀天象，結合「武周代唐」之言，於是一時興起，開始預言推算；李淳風以術數易卦推衍，一算起來就上了癮，一發不可收拾，竟推算到唐朝以後兩千年的歷史！直到袁天罡推他的背，說道：「天機不可再泄,
        還是回去休息吧!」，即第60像所述，是以『推背圖』之名由此而來。
      </p>
      <p>
        『推背圖』共有六十象，每象以幹支為序號，主要包涵：一個卦象、一幅圖像、讖語和「頌曰」律詩一首，共四個部分。融合了易學、天文、詩詞、謎語、圖畫為一體。預言了從唐木運開始、至明火運世程近兩千年，一直到社會共產共和的世界大同，即將發生在重大社會歷史事件。是中國歷史上「最為經典」的未來學巨著。
      </p>
      <div class="btn-close" @click="handleClose">关闭</div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
const show = defineModel()
const emit = defineEmits(['close'])
const handleClose = () => {
  emit('close')
}
</script>

<style lang="scss" scoped>
.intro-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: 24px 160px;
  background: rgba(255, 255, 255, .2);
  backdrop-filter: saturate(180%) blur(10px);


  .title {
    width: 100%;
    text-align: center;
    font-size: 40px;
    padding: 24px 0;
  }

  p {
    font-size: 28px;
    line-height: 2;
    text-indent: 2em;
    margin-bottom: 16px;
  }

  .btn-close {
    width: 96px;
    margin: 80px auto;
    padding: 8px 0;
    font-size: 18px;
    text-align: center;
    border: 1px solid $color-red;
    color: $color-red;
    border-radius: 200px;
    cursor: pointer;
    transition: all ease .4s;

    &:hover {
      color: #fff;
      background: $color-red;
    }
  }
}

</style>
