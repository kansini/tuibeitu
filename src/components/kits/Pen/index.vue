<template>
  <div class="pen">
    <div class="pen-body">
      <div class="top-shadow"></div>
      <div class="label"></div>
    </div>
    <div class="pen-tip"></div>
  </div>
</template>

<script>
export default {
  name: "pen"
}
</script>

<style lang="scss" scoped>
.pen {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(300%, -50%);
  font-family: PingFang;

  .pen-body {
    position: relative;
    width: 56px;
    height: 640px;
    border-radius: 28px 28px 0 0;
    background-image: linear-gradient(270deg, #CCCDCE 0%, #F0F1F2 35%, #FAFBFB 55%, #F0F1F2 91%, #E1E2E3 100%);
    box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.05);
    overflow: hidden;
    z-index: 2;

    .top-shadow {
      position: absolute;
      width: 100%;
      height: 40px;
      top: 0;
      left: 0;
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 2%, rgba(0, 0, 0, 0.08) 100%);
    }

    &::before {
      position: absolute;
      content: '';
      width: 8px;
      height: calc(100% - 32px);
      top: 32px;
      left: 8px;
      transform: scaleX(-1);
      background: #FFFFFF;
      border-radius: 0 6px 2px 5px;
    }

    .label {
      position: absolute;
      left: 0;
      top: 128px;
      width: 100%;
      height: 48px;
      line-height: 48px;
      text-align: center;
      background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.40) 0%, rgba(7, 7, 7, 0.00) 19%, rgba(59, 59, 59, 0.00) 83%, rgba(0, 0, 0, 0.40) 100%);

      &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: .6;
        background-image: linear-gradient(90deg, #909090 0%, #3C3C3C 33%, #FFFFFF 34%, #EBEBEB 60%, #777777 71%, #373737 100%);
      }

      &::after {
        position: absolute;
        content: 'Pencil';
        font-size: 16px;
        color: #54575A;
        letter-spacing: -1px;
        text-align: center;
        text-shadow: -0.5px 0.5px 0 rgba(255, 255, 255, 0.80);
        width: 8px;
        height: 100%;
        left: 8px;
        top: 0;
        opacity: .8;
        background-image: linear-gradient(270deg, rgba(255, 255, 255, 0.10) 0%, #FFFFFF 38%);
      }
    }

  }

  .pen-tip {
    position: relative;
    width: 56px;
    height: 96px;
    background-image: linear-gradient(-270deg, #CCCDCE 0%, #F0F1F2 35%, #FAFBFB 55%, #F0F1F2 91%, #E1E2E3 100%);
    box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.05);
    transform: rotate(180deg) translateY(40px);
    border-radius: 50% 50% 50% 50% / 80% 80% 40% 40%;

    &::before {
      position: absolute;
      // content: '';
      width: 8px;
      height: calc(100% - 12px);
      top: 0;
      left: 8px;
      transform: rotate(-8deg) translateX(4px);
      background: #FFFFFF;
      border-radius: 0 0 2px 5px;
    }

  }


}
</style>
