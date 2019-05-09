<template>
    <section class="menu">
        底部菜单
        <svgicon
            name="home"
            color="#FF0000"
        ></svgicon>
    </section>
</template>

<script>
import _ from 'lodash'
export default {
    data() {
      return{
        menu: {}
      }
    },
    mounted() {
      console.log(this.$router)
      let a = [1,2,3];
      let b = [2,3,4];
      console.log(_.difference(a,b))
    },
    methods: {

    }
}
</script>

<style lang="less">

</style>