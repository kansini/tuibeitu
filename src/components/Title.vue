<template>
    <div class="title">
        <div class="title-item">
            <div>第{{title.sn}}象</div>
            <div>{{title.ganzhi}}</div>
        </div>
        <div class="title-item">
            <div>{{title.hexagrams1}}</div>
            <div>{{title.hexagrams2}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Title",
        props: {
            title: {
                type: Object,
                default: () => {
                    return {
                        "sn": "一",
                        "ganzhi": "甲子",
                        "hexagrams1": "乾下乾上",
                        "hexagrams2": "乾"
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 16px 0;
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

        .title-item {
            width: 20px;

            div:nth-child(1) {
                margin-bottom: 16px;
            }
        }
    }
</style>
