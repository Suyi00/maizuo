<template>
  <div id="app">
    <FooterNav></FooterNav>
    <router-view/>
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav.vue'
export default {
    components:{
        FooterNav,
    },
}
</script>

<style lang="scss" >
*{
    margin: 0;
    padding: 0;
}
html,body{
    height: 100%;
    // 移动端 禁止缩放
    touch-action: none;
}
ul,li{
    list-style: none;
}

</style> 