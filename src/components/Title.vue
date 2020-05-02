<template>
    <div class="title">
        <div>第一象</div>
        <div>甲子</div>
        <div>乾下乾上</div>
        <div>乾</div>
    </div>
</template>

<script>
    export default {
        name: "Title",
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
        width: 64px;
        height: 480px;
        background: #000;
        color: #fff;
        font-size: 20px;
        margin: 0 40px;
        box-sizing: border-box;
        text-align: center;

        &::after {
            position: absolute;
            content: '';
            width: 64px;
            height: 32px;
            background: #000;
            left: 0;
            bottom: -40px;
        }

        div {
            width: 20px;
        }
    }
</style>
