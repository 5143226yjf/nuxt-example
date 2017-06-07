<template>
    <div class="todo-list">
      <navigation :msg="msg"></navigation>
      <div class="todo-content">
        <ul>
          <li v-for="(list, index) in todos">
            <div class="list">{{list.time}}</div>
            <div class="list">{{list.title}}</div>
            <div class="list" id="content">内容
              <div class="show-content">{{list.content}}</div>
            </div>
            <button class="complete" @click="complete(`${index}`)">完成</button>
          </li>
        </ul>
      </div>
      <div class="clear" v-show="!isShow">
        <button class="clear-btn" @click="clear">清空</button>
      </div>
      <transition name="test">
        <div class="none" v-if="isShow">
          <img src="~static/none.png"/>
          <p>空空如也～</p>
        </div>
      </transition>
    </div>
</template>
<script>
  import Navigation from '~/components/Nav'

  export default {
    name: 'todoList',
    components: {
      Navigation
    },
    mounted: function () {
      if (this.$store.state.todos.length === 0) {
        this.isShow = true
      }
    },
    transition: {
      name: 'test',
      mode: 'out-in'
    },
    scrollToTop: true,
    data () {
      return {
        isShow: false,
        todos: this.$store.state.todos,
        msg: 'TODO列表',
        path: '/home'
      }
    },
    methods: {
      complete (index) {
        this.$store.commit('completeTodo', index)
        if (this.$store.state.todos.length === 0) {
          this.isShow = true
        }
      },
      clear () {
        this.$store.commit('deleteTodo')
        this.isShow = true
      }
    }
  }

</script>
<style scoped>
  .todo-list{
    width: 100%;
    height: 100%;
    margin-top: 80px;
  }
  .todo-content{
    width: 90%;
    max-height: 550px;
  }
  ul{
    clear: both;
  }
  li{
    width: 100%;
    height: 40px;
    text-align: center;
    list-style-type: none;
    border:  1px solid #42b983;
    position: relative;
    font-size: 14px;
    margin-bottom: -1px;
  }
  .list{
    width: 23%;
    height: 40px;
    line-height: 40px;
    float: left;
  }
  #content:hover .show-content {
    display: block;
    z-index: 9;
  }
  .list:nth-child(2){
    width: 32%;
  }
  .show-content{
    display: none;
    width: 100px;
    height: 50px;
    line-height: 50px;
    position: absolute;
    right: -1px;
    top: 35px;
    border-radius: 5px;
    background: #ccc;
    color: #fff;
  }
  .complete{
    height: 35px;
    line-height: 35px;
    float: right;
    margin-right: 5px;
    border: none;
    background: #fff;
    outline: none;
    color: #42b983;
  }
  .clear {
    width: 80%;
    height: 40px;
    margin: 15px auto;
  }
  .clear-btn{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: #42b983;
    background: #42b983;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    outline: none;
  }
  .none{
    width: 150px;
    margin: 0 auto;
    text-align: center;
  }
  .none img{
    width: 150px;
    height: 150px;
  }
  .none p{
    height: 20px;
    margin-top: 20px;
    color: #42b983;
    font-size: 20px;
  }
</style>
