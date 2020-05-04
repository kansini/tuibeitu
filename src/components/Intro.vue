<template>
    <div class="intro-container">
        <div class="title">【简介】</div>
        <p>
            『推背图』被称作中华预言第一奇书，传说它是唐太宗李世民为推算大唐国运，下令当时两位著名的道士袁天罡和李淳风编写的。
        </p>
        <p>
            传说此袁李二人精通阴阳八卦奇门术数，道术高深，并具有洞察未来的“天眼神通”。因李淳风夜观天象，结合“武周代唐”之言，于是一时兴起，开始预言推算；李淳风以术数易卦推衍，一算起来就上了瘾，一发不可收拾，竟推算到唐朝以后两千年的历史！直到袁天罡推他的背，说道：“天机不可再泄,
            还是回去休息吧!”，即第60像所述，是以『推背图』之名由此而来。
        </p>
        <p>
            『推背图』共有六十象，每象以干支为序号，主要包涵：一个卦象、一幅图像、谶语和“颂曰”律诗一首，共四个部分。融合了易学、天文、诗词、谜语、图画为一体。预言了从唐木运开始、至明火运世程近两千年，一直到社会共产共和的世界大同，即将发生在重大社会历史事件。是中国历史上“最为经典”的未来学巨著。
        </p>
        <div class="btn-close" @click="handleClose">关闭</div>
    </div>
</template>

<script>
    export default {
        name: "Intro",
        methods:{
            handleClose(){
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .intro-container {
        .title {
            width: 100%;
            text-align: center;
            font-size: 40px;
            padding: 24px 0;
        }

        p {
            font-size: 24px;
            line-height: 56px;
            text-indent: 2em;
        }

        .btn-close {
            width: 96px;
            margin: 80px auto;
            padding: 8px 0;
            font-size: 18px;
            text-align: center;
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
    }

</style>
