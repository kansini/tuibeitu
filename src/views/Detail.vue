<template>
    <div class="detail">
        <div class="detail-item" v-for="(item,index) in detail">
            <div class="detail-content">
                <div class="figure">
                    <img :src="`./img/figure${index + 1}.svg`" alt="">
                </div>
                <tb-title :title="item.title"/>
                <tb-poem :poem="item.poem.predict"></tb-poem>
                <tb-poem title="颂曰" :poem="item.poem.description"></tb-poem>
            </div>
            <div class="btn-group">
                <div class="btn disable">上一象</div>
                <div class="btn">下一象</div>
            </div>
        </div>

    </div>
</template>

<script>
    import tbTitle from '@/components/Title'
    import tbPoem from '@/components/Poem'

    export default {
        name: "detail",
        components: {
            tbTitle,
            tbPoem
        },
        data() {
            return {
                detail: [],
                description: [
                    ["自从盘古迄希夷", "虎斗龙争事正奇"],
                    ["悟得循环真谛在", "试于唐后论元机"]
                ]
            }
        },
        created() {
            this.getDetail()
        },
        methods: {
            getDetail() {
                this.$axios.get('poem.json')
                    .then(res => this.detail = res.data)
            }
        }
    }
</script>

<style lang="scss" scoped>
    body {
        background: #fff;
    }

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
                    cursor: pointer;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }

        }

        .btn-group {
            width: 100%;
            display: flex;
            justify-content: center;

            .btn {
                width: 96px;
                padding: 8px 0;
                font-size: 18px;
                text-align: center;
                //background: $color-light;
                border: 1px solid $color-red;
                color: $color-red;
                border-radius: 200px;
                z-index: 999;
                cursor: pointer;
                transition: all ease .4s;

                &:not(:last-child) {
                    margin-right: 64px;
                }

                &:hover {
                    color: #fff;
                    background: $color-red;
                }
            }

            .disable {
                opacity: .3;
                cursor: not-allowed;

                &:hover {
                    background: transparent;
                    color: $color-red;
                }
            }
        }

    }
</style>
