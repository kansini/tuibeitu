<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="child-view"/>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'App',
        data() {
            return {
                transitionName: 'slide-left'
            }
        },
        watch: {
            '$route'(to, from) {
                if (to.path == '/') {
                    this.transitionName = 'slide-left';
                } else {
                    this.transitionName = 'slide-right';
                }
            }
        }
    }
</script>

<style lang="scss">
    body {
        //font-family: SentyTang;
        font-family: kangxizidianti;
    }
</style>
