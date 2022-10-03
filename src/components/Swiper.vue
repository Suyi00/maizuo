<template>
    <div class="swiper">
        <div class="swiper-warpper">
            <!-- 插槽  用来传值的坑 -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
// import Swiper from 'swiper'
// // import "@/swiper-bundle.css"
// import "@/swiper-bundle.min.css"

export default{
    mounted(){
        this.$nextTick( ()=>{
            new Swiper(".swiper",{
                slidesPerView: 4,
            })
        })
    },
}
</script>