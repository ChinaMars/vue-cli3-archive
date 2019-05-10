<template>
    <section class="menu">
        <div v-for="item in menu" :key="item.name">
            <svgicon
                    :name="item.name"
                    color="#FF0000"
            ></svgicon>
            {{item.name}}
        </div>
    </section>
</template>

<script>
import _ from 'lodash'

export default {
    data() {
      return{

      }
    },
    mounted() {

    },
    methods: {},
    computed: {
      menu() {
        let routes = _.map(this.$router.options.routes,(o)=>{
          if (o.menu) return o
        })
        routes = _.without(routes, undefined)
        return routes
      }
    }
}
</script>

<style lang="less">

</style>