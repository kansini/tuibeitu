<template>
    <div class="cursor" v-drag></div>
</template>

<script>
    export default {
        name: "oh-cursor",
        data() {
            return {}
        },
        directives: {
            drag(el, bindings) {
                el.onmousemove = (e) => {
                    let disx = e.pageX - el.offsetLeft;
                    let disy = e.pageY - el.offsetTop;
                    document.onmousemove = (e) => {
                        el.style.left = e.pageX - disx + 'px';
                        el.style.top = e.pageY - disy + 'px';
                    }
                    document.onmouseup = () => {
                        document.onmousemove = document.onmouseup = null;
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    .cursor {
        position: absolute;
        top: 0;
        left: 0;
        width: 240px;
        height: 240px;
        border-radius: 120px;
        background: #fff;
       // opacity: 1;
        mix-blend-mode: difference;
        z-index: 999;
       // pointer-events: none;
        transition: all ease .1s;
    }
</style>
