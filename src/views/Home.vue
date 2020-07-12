<template>
    <div class="home">
        <oh-cursor :size="cursorSize"/>
        <div class="cover" ref="cover">
        </div>
        <div class="btn-group" ref="btn">
            <tbButton @click="$router.push('/detail')"/>
        </div>
    </div>
</template>

<script>
    import loading from '@/components/Loading'
    import tbButton from '@/components/kits/Button'
    import ohCursor from '@/components/kits/cursor'
    import pen from '@/components/kits/Pen'

    export default {
        name: 'Home',
        components: {
            loading,
            tbButton,
            ohCursor,
            pen
        },
        data() {
            return {
                cursorSize: ""
            }
        },
        mounted() {
            let btn = this.$refs.btn
            let cover = this.$refs.cover
            btn.addEventListener('mouseover', () => {
                this.cursorSize = "small"
            })
            btn.addEventListener('mouseleave', () => {
                this.cursorSize = ""
            })
            cover.addEventListener('mouseover', () => {
                this.cursorSize = "large"
            })
            cover.addEventListener('mouseleave', () => {
                this.cursorSize = ""
            })
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        width: 100vw;
        height: 100vh;
        background: $base-bg;

        .cover {
            position: absolute;
            width: 296px;
            height: 280px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url("../assets/img/cover.svg") no-repeat center;
            background-size: 100%;
            animation: cover 1s linear forwards;
        }

        .btn-group {
            position: fixed;
            align-items: center;
            left: 0;
            bottom: 56px;
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 999;

            div:not(:last-child) {
                margin-right: 64px;
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

    @keyframes cover {
        0% {
            opacity: 0;
            background-size: 0 auto;
        }
        80% {
            opacity: 1;
            background-size: 96px auto;
        }
        100% {
            background-size: 240px auto;
        }
    }
</style>
