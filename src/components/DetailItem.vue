<template>
    <div class="detail-item">
        <div class="detail-content">
            <div class="figure">
                <img :src="`./img/figure${index + 1}.svg`"  @mouseover="onFigure" @mouseleave="leaveFigure">
            </div>
            <tb-title :title="detail.title"/>
            <tb-poem :poem="detail && detail.poem && detail.poem.predict"></tb-poem>
            <tb-poem title="颂曰" :poem="detail && detail.poem && detail.poem.description"></tb-poem>
        </div>
    </div>

</template>

<script>
    import tbTitle from '@/components/Title'
    import tbPoem from '@/components/Poem'

    export default {
        name: "DetailItem",
        components: {
            tbTitle,
            tbPoem,

        },
        props: {
            index: {
                type: Number,
                default: 0
            },
            detail: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        methods: {
            onFigure() {
                this.$emit('onFigure')
            },
            leaveFigure() {
                this.$emit('leaveFigure')
            }

        }
    }
</script>

<style lang="scss" scoped>
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
                    // cursor: pointer;
                    height: 240px;

                    &:hover {
                          transform: scale(1.2);
                    }
                }
            }

        }
    }


</style>
