<template>
    <div class="full-page-content" >
        <oh-cursor background="rgba(255,255,255,.5)"/>
        <!--        <oh-cursor :size="cursorSize"/>-->
        <div class="nav">
            <button class="prev" @click="prevPage">prev</button>
            <button class="next" @click="nextPage">next</button>
        </div>
        <section>
            <h1>Squeaky Clean.1</h1>
            <p>We rolled out a heavy-duty website for Rasco.</p>
        </section>
        <section>
            <h1>Squeaky Clean.2</h1>
            <p>We rolled out a heavy-duty website for Rasco.</p>
        </section>
        <section>
            <h1>Squeaky Clean.3</h1>
            <p>We rolled out a heavy-duty website for Rasco.</p>
        </section>
        <section>
            <h1>Squeaky Clean.4</h1>
            <p>We rolled out a heavy-duty website for Rasco.</p>
        </section>
        <section>
            <h1>Squeaky Clean.5</h1>
            <p>We rolled out a heavy-duty website for Rasco.</p>
        </section>

    </div>
</template>

<script>
    import ohCursor from '@/components/kits/cursor'

    export default {
        name: "FullPage",
        components: {
            ohCursor
        },
        mounted() {
            window.addEventListener('wheel', (e) => {
                let delta = e.wheelDelta
                // console.log(delta)
                if (delta < 0) {
                    const nextClick = new Event('click')

                }
                // console.log('滚着呢')
                // this.nextPage()
                // if (e.deltaY > 0) {
                //     this.nextPage()
                // } else {
                //     this.prevPage()
                // }
            })
        },
        data() {
            return {
                currentIndex: 0,
                cursorSize: ''
            }
        },
        methods: {
            nextPage() {
                const section = document.querySelectorAll('section')
                if (this.currentIndex > section.length - 2) return
                this.currentIndex++
                section.forEach((section, i) => {
                    if (i === this.currentIndex) {
                        section.scrollIntoView({behavior: 'smooth'})
                    }
                })
            },
            prevPage() {
                const section = document.querySelectorAll('section')
                if (this.currentIndex < 1) return
                this.currentIndex--
                section.forEach((section, i) => {
                    if (i === this.currentIndex) {
                        section.scrollIntoView({behavior: 'smooth'})
                    }
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    .full-page-content {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        font-family: "PingFang";

        .nav {
            position: fixed;
            right: 16px;
            top: 16px;
        }

        section {
            width: 100%;
            height: 100vh;
            color: #fff;

            &:nth-child(3n+1) {
                background: #306EF3;
            }

            &:nth-child(3n+2) {
                background: #F5A623;
            }

            &:nth-child(3n+3) {
                background: #FF5368;

            }

        }
    }
</style>
