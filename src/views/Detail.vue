<template>
    <div class="detail">
        <div class="tool-bar">
            <div class="btn-home" @click="$router.push('/')"></div>
            <div class="btn-context"></div>
        </div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item,index) in detail" :key="index">
                <div class="detail-item">
                    <div class="detail-content">
                        <div class="figure">
                            <img :src="`./img/figure${index + 1}.svg`">
                        </div>
                        <tb-title :title="item.title"/>
                        <tb-poem :poem="item.poem.predict"></tb-poem>
                        <tb-poem title="颂曰" :poem="item.poem.description"></tb-poem>
                    </div>
                    <div class="btn-group">
                        <div class="btn" :class="{disable : index == 0}">上一象</div>
                        <div class="btn" :class="{disable : index == detail.length - 1}">下一象</div>
                    </div>
                </div>
            </swiper-slide>
            <!--            <div class="swiper-pagination" slot="pagination"></div>-->
        </swiper>
    </div>
</template>

<script>
    import tbTitle from '@/components/Title'
    import tbPoem from '@/components/Poem'
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "detail",
        components: {
            tbTitle,
            tbPoem,
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                detail: [],
                swiperOption: {
                    direction: 'vertical',
                    effect : 'coverflow',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
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

    .detail {
        .swiper {
            height: 100%;
            width: 100%;
        }

        .tool-bar {
            position: fixed;
            left: 0;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
            height: 64px;
            padding: 16px;
            box-sizing: border-box;
            z-index: 999;

            [class^='btn-'] {
                width: 32px;
                height: 32px;
                cursor: pointer;
                opacity: .8;
                transition: all ease .4s;

                &:not(:last-child) {
                    margin-right: 16px;
                }

                &:hover {
                    opacity: 1;
                    transform: scale(1.1);
                }
            }

            .btn-home {
                background: url("../assets/img/ico-home.svg") no-repeat center;
                background-size: auto 100%;
            }

            .btn-context {
                background: url("../assets/img/ico-context.svg") no-repeat center;
                background-size: auto 100%;
            }
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


    }

</style>
