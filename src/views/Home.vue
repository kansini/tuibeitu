<template>
    <div class="home">
        <div class="cover">
            <div class="btn-group">
                <tbButton @click="$router.push('/detail')"/>
            </div>
        </div>
    </div>
</template>

<script>
    import loading from '@/components/Loading'
    import tbButton from '@/components/kits/Button'

    export default {
        name: 'Home',
        components: {
            loading,
            tbButton
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        width: 100vw;
        height: 100vh;
        background: $base-bg;

        .cover {
            width: 100vw;
            height: 100vh;
            background: url("../assets/img/cover.svg") no-repeat center;
            background-size: 160px auto;
            animation: cover 1s linear forwards;

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
