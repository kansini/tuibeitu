<template>
    <div class="gadget-container">
<!--        <button @click="changeNum">gou</button>-->
        <animate-number v-for="(num,index) in nums"
                        class="goujun"
                        mode="auto"
                        :from="0"
                        :to="num"
                        from-color="#44CC00"
                        to-color="#ec4949"
                        :key="index"

        >
        </animate-number>
    </div>
</template>

<script>
    import radio from '@/components/kits/Radio'

    export default {
        name: "gadget",
        components: {
            radio
        },

        data() {
            return {
                nums: [1900, 99, 20450, 1450]
            }
        },
        methods: {
            updateNum() {
                this.nums = [16200, 2023, 1450, 817]
            },
            changeNum() {
               // this.$refs.num0.start()
            }
        },
        computed: {
            // goujun() {
            //     return [190, 99, 20450, 1450, 234355]
            // }
        }
    }
</script>

<style lang="scss" scoped>
    .gadget-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        min-height: 100vh;
        background-image: linear-gradient(163deg, #C5C5C5 0%, #E2E4E3 73%);
        background-image: linear-gradient(180deg, #C5C5C5 58%, rgba(226, 228, 227, 0.00) 71%);
        background-image: radial-gradient(100% 76%, rgba(255, 255, 255, 0.50) 33%, rgba(255, 255, 255, 0.00) 77%);
        background-image: linear-gradient(46deg, rgba(255, 255, 255, 0.00) 0%, rgba(177, 177, 177, 0.50) 100%);

        .goujun:not(:nth-child(1)) {
            margin-left: 32px;

        }

        .goujun {
            font-size: 40px;
        }

    }
</style>
