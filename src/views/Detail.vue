<template>
    <div class="detail">
        <transition name="slideIn">
            <div class="nav" v-if="isNav">
                <navItem v-for="(item,index) in detail" :title="item.title" @click.native="nav(index)"/>
            </div>
        </transition>
        <div class="tool-bar">
            <div class="btn-home" @click="$router.push('/')"></div>
            <div class="btn-context" @click="isNav = true"></div>
        </div>
        <detail-item :detail="detail[detailIndex]" :index="detailIndex"/>
        <div class="btn-group">
            <div class="btn-prev" @click="pre">上一象</div>
            <div class="btn-play font-icons"
                 @click="togglePlay">
                {{playMsg}}
            </div>
            <div class="btn-next" @click="next">下一象</div>
        </div>
    </div>
</template>

<script>

    import detailItem from '@/components/DetailItem'
    import tbNav from '@/components/Nav'
    import navItem from '@/components/NavItem'

    export default {
        name: "detail",
        components: {
            detailItem,
            tbNav,
            navItem
        },

        data() {
            return {
                detailIndex: 0,
                isNav: false,
                detail: [],
                playMsg: 'play_arrow',
                autoplayFlag: false,
            }
        },
        created() {
            this.getDetail()
        },
        computed: {},
        methods: {
            getDetail() {
                this.$axios.get('poem.json')
                    .then(res => this.detail = res.data)
            },
            pre() {
                if (this.detailIndex > 0) {
                    this.detailIndex -= 1
                } else {
                    this.detailIndex = this.detail.length - 1
                }

            },
            next() {
                if (this.detailIndex < this.detail.length - 1) {
                    this.detailIndex += 1
                } else {
                    this.detailIndex = 0
                }
            },
            togglePlay() {
                this.autoplayFlag = !this.autoplayFlag
                if (this.autoplayFlag) {
                    this.playMsg = 'pause'
                } else {
                    this.playMsg = 'play_arrow'
                }
            },
            nav(index) {
                this.isNav = false
                this.detailIndex = index
            }
        }
    }
</script>

<style lang="scss" scoped>
    body {
        background: #fff;
    }

    .detail {

        .nav {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            position: fixed;
            width: 440px;
            height: 100vh;
            top: 0;
            right: 0;
            background: #fff;
            box-shadow: 0 0 100px 0 $color-light;
            z-index: 1000;
            padding: 8px;
            box-sizing: border-box;
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
                background: url("../assets/img/ico-context.svg") no-repeat center;
                background-size: auto 100%;
            }

            .btn-context {
                background: url("../assets/img/ico-home.svg") no-repeat center;
                background-size: auto 100%;
            }
        }

        .btn-group {
            position: fixed;
            align-items: center;
            left: 0;
            bottom: 24px;
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 9999;

            div:not(:last-child) {
                margin-right: 64px;
            }

            .btn-prev,
            .btn-next {
                width: 96px;
                padding: 8px 0;
                font-size: 18px;
                text-align: center;
                //background: $color-light;
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

            .btn-play {
                width: 40px;
                height: 40px;
                line-height: 40px;
                border-radius: 40px;
                color: #fff;
                background: $color-red;
                transition: all ease .4s;
                text-align: center;
                font-size: 30px;
                cursor: pointer;

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
