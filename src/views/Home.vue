<template>
    <div class="home">
        <div class="cover"></div>
        <div class="btn-enter" @click="$router.push('/detail')">推开</div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {}
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
        }

        .btn-enter {
            position: absolute;
            bottom: 25vh;
            left: calc(50vw - 48px);
            width: 96px;
            padding: 8px 0;
            font-size: 18px;
            text-align: center;
            //background: $color-light;
            border: 1px solid #D0021B;
            color: #D0021B;
            border-radius: 200px;
            z-index: 999;
            cursor: pointer;
            transition: all ease .4s;

            &:hover {
                color: #fff;
                background: #D0021B;
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
