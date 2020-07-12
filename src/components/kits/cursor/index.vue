<template>
    <div class="custom-cursor">
        <div class="cursor-inner"
             :class="size == 'small' ? 'cursor-small' :size == 'large' ? 'cursor-large' :'' "
             :style="{background:background}"
             ref="cursorInner"></div>
        <div class="cursor-outer"
             :class="size == 'small' || size == 'large' ? 'hidden':''"
             :style="{borderColor:background}"
             ref="cursorOuter"></div>
    </div>
</template>

<script>
    export default {
        name: "CustomCursor",
        props: {
            size: {
                type: String,
                default: ''
            },
            background: {
                type: String,
                default: 'rgba(255,0,0,.8)'
            }

        },
        mounted() {
            const cursorInner = this.$refs.cursorInner
            const cursorOuter = this.$refs.cursorOuter

            document.addEventListener('mousemove', e => {
                cursorInner.style.top = `${e.clientY - this.offset}px`
                cursorInner.style.left = `${e.clientX - this.offset}px`
                cursorOuter.style.top = `${e.clientY - this.offset - 20}px`
                cursorOuter.style.left = `${e.clientX - this.offset - 20}px`
                // cursorOuter.setAttribute("style", `top:${e.clientY - this.offset - 20}px;left:${e.clientX - this.offset - 20}px`)
                // cursor.setAttribute("style", `top:${e.pageY - this.offset}px;left:${e.pageX - this.offset}px`)
            })
        },
        computed: {
            offset() {
                if (this.isGrow) {
                    return 60
                } else {
                    return 4
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .custom-cursor {
        .cursor-inner {
            position: fixed;
            width: 8px;
            height: 8px;
            left: 0px;
            top: 0;
            border-radius: 50%;
            background: rgba(255, 0, 0, .85);
            //background: linear-gradient(180deg, #FAD961 0%, #F76B1C 100%);
            //mix-blend-mode: difference;
            z-index: 9999;
            //backdrop-filter: blur(2px);
            transition: all ease-out .2s;
            pointer-events: none;
            //animation: cursorAni 1s infinite alternate;

        }

        .cursor-outer {
            position: fixed;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            transition: all ease-out .4s;
            border: 1px solid #ff3333;
            box-sizing: border-box;
            pointer-events: none;
            z-index: 9999;
        }

        .cursor-large {
            width: 400px;
            height: 400px;
            background: #EEE1D1;
            mix-blend-mode: difference;
            transform: translate(-160px, -160px);
            //backdrop-filter: invert(1);
            //animation: cursorAni .5s forwards;
        }

        .cursor-small {
            width: 40px;
            height: 40px;
            transform: translate(-16px, -16px);
            z-index: 9999;
            background: rgba(255, 0, 0, .6);
            mix-blend-mode: difference;
            //background: rgba(255, 255, 255, 1);
            //mix-blend-mode: normal;
        }

        .hidden {
            transform: scale(0);
            opacity: 0;
        }

        .is-grow {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: rgba(255, 0, 0, .8);
            transition: all ease-out .4s;
        }

        @keyframes cursorAni {
            from {
                transform: scale(1);
            }
            to {
                transform: scale(.7);
            }
        }

    }


</style>
