<template>
  <div class="home">
    <Navigation :msg="msg"></Navigation>
    <div class="user-content">
      <nuxt-link to="/user/addTodo">添加todo</nuxt-link>
      <nuxt-link to="/user/todoList">todo列表</nuxt-link>
    </div>
  </div>
</template>
<script>
  import Navigation from '~/components/Nav'
  export default {
    components: {
      Navigation
    },
    data () {
      return {
        msg: '主页'
      }
    }
  }
</script>
<style scoped>
  .home{
    max-width: 500px;
    max-height: 550px;
    margin: 0 auto;
  }
  .user-content{
    width: 70%;
    margin: 100px auto;
  }
  a{
    width: 100%;
    height: 40px;
    color: #fff;
    line-height: 40px;
    background: #42b983;
    border-radius: 5px;
    margin: 10px 0;
    display: inline-block;
    text-align: center;
    text-decoration: none;
  }
</style>
