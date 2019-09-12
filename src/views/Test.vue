<template>
    <div class="test">
        模拟考试
        <div @click="alert()">click</div>
        <Menu></Menu>
    </div>
</template>

<script>
  import Vue from 'vue';
  import Menu from '@/components/footer/Menu.vue';
  import MessageBox from '@/components/message-box/index';

  Vue.use(MessageBox);

  export default {
    name: 'Test',
    components: {
      Menu
    },
    mounted() {

    },
    methods: {
      alert() {
        this.$msgbox({
          title: 'MessageBox Title',
          // beforeClose: (confirm,instance,done) => {
          //   setTimeout(function(){
          //     done();
          //   },2000);
          // }
        }).then(() =>{
          console.log('点了确定的resolve')
        }).catch(() =>{
          console.log('点了取消的reject')
        })
      }
    }
  }
</script>

<style scoped>

</style>