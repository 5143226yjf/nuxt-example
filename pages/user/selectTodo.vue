<template>
    <div>
      <navigation :msg="msg"></navigation>
      <div class="select-content">
        <input type="text" placeholder="请输入todo标题" v-model="query"/>
        <ul>
          <li v-for="item in selectList">
            <div><span>时间：</span>{{ item.time }}</div>
            <div><span>标题：</span>{{ item.title }}</div>
            <div><span>内容：</span>{{ item.content }}</div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import Navigation from '~/components/Nav'
  export default {
    components: {
      Navigation
    },
    computed: {
      selectList: function () {
        let that = this
        return this.todoList.filter(function (item) {
          return item.title.toLowerCase().indexOf(that.query.toLowerCase()) !== -1
        })
      }
    },
    data () {
      return {
        query: '',
        msg: '搜索todo',
        todoList: this.$store.state.todos
      }
    },
    methods: {
      selectTodo (e) {
        this.$store.commit('selectTodo', e.target.value)
      }
    }
  }
</script>
<style scoped>
  .select-content{
    width: 90%;
    margin: 65px auto;
  }
  .select-content input{
    width: 100%;
    height: 40px;
    border: 1px solid #42b983;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: 10px;
  }
  input:focus{
    border: 2px solid #fff;
  }
  .select-content ul{
    margin-top: 20px;
  }
  .select-content ul li{
    margin-bottom: 10px;
  }
</style>
