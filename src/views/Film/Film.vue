<template>
    <div>
        <FilmListTopNav :class="fixed ? 'fixed' : '' " ></FilmListTopNav>
        <router-view></router-view>
    </div>
</template>

<script>
import FilmListTopNav from '@/components/FilmListTopNav.vue'
   export default{
     components:{ 
        FilmListTopNav
        },
        data() {
            return {
                fixed:false
            }
        },
        mounted() {
            window.addEventListener('scroll',(e) => {
                let top = document.documentElement.scrollTop;
                if(top > 80){
                    this.fixed = true
                }else{
                    this.fixed = false
                }
            },true)
        }

   }
</script>

<style lang="scss" scopeD>
.fixed{
    position: fixed;
    top: 0;
    background: #ffff;
    }
</style>>

