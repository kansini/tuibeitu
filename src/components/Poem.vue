<template>
    <div class="poem">
        <div class="poem-content">
            <div class="poem-title">
                {{title}}
            </div>
        </div>
        <div class="poem-content" v-for="item in poem">
            <div v-for="subItem in item">
                {{subItem}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Poem",
        props: {
            title: {
                type: String,
                default: '谶曰'
            },
            poem: {
                type: Array,
                default: () => {
                    return [
                        ["茫茫天地", "不知所止"],
                        ["日月循环", "周而复始"]
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .poem {
        position: relative;
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-start;
        margin-left: 40px;

        .poem-content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 64px;
            height: 520px;
            color: #000;
            padding: 16px;
            border-left: 1px solid #333;
            font-size: 20px;
            box-sizing: border-box;
            text-align: center;

            &:last-child div:last-child::after {
                position: absolute;
                left: -6px;
                bottom: -6px;
                content: '';
                width: 12px;
                height: 12px;
                border-radius: 16px;
                box-shadow: 0 0 0 3px $color-dark;
                opacity: .8;
            }


            &:nth-child(1) {
                border-right: 1px solid #333;
            }

            div {
                position: relative;
                width: 20px;
                margin-bottom: 16px;
            }

            .poem-title {
                font-size: 24px;
            }
        }

    }

</style>
