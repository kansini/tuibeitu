<template>
    <div class="nav-item">
        <div class="title">
            <div>第{{title.sn}}象</div>
            <div>{{title.ganzhi}}</div>
        </div>
        <div class="title">
            <div>{{title.hexagrams1}}</div>
            <div>{{title.hexagrams2}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavItem",
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
    .nav-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 16px 0;
        width: 40px;
        height: 240px;
        background: $color-dark;
        color: #fff;
        font-size: 16px;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;


        .title {
            width: 20px;


            div:nth-child(1) {
                margin-bottom: 8px;
            }
        }
    }
</style>
