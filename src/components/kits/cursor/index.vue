<template>
    <div class="cursor" :class="size == 'large' ? 'cursor-large': size == 'small' ? 'cursor-small' :'normal'"></div>
</template>

<script>
    export default {
        name: "CustomCursor",
        props: {
            size: {
                type: String,
                default: ""
            },
        },
        mounted() {
            const cursor = document.querySelector('.cursor')
            window.addEventListener('mousemove', e => {
                // cursor.style.top = `${e.pageY - this.offset}px`
                // cursor.style.left = `${e.pageX - this.offset}px`
                cursor.setAttribute("style", `top:${e.pageY - this.offset}px;left:${e.pageX - this.offset}px`)
            })
        },
        computed: {
            offset() {
                if (this.isGrow) {
                    return 0
                } else {
                    return 0
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cursor {
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        opacity: .85;
        background: linear-gradient(180deg, #FAD961 0%, #F76B1C 100%);
        background: #D0021B; //  #EEE1D1;
        mix-blend-mode: difference;
        z-index: 9999;
        // backdrop-filter: blur(2px);
        transform: translate(-50%, -50%);
        transition: all ease-out .4s;
        pointer-events: none;
        // animation: cursorAni 1s infinite alternate;

        &::after {
            // content: '';
            position: absolute;
            left: -14px;
            top: -14px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            transition: all ease-out .8s;
            transition-delay: .4s;
            border: 2px solid #D0021B;
        }
    }

    .cursor-large {
        width: 400px;
        height: 400px;
        background: #EEE1D1;
        //backdrop-filter: invert(1);
        //animation: cursorAni 1s infinite alternate;
    }

    .cursor-small {
        width: 40px;
        height: 40px;
        //background: rgba(255, 255, 255, 1);
        //mix-blend-mode: normal;
    }

    @keyframes cursorAni {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.2);
        }
    }

</style>
