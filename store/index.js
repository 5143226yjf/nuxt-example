/**
 * Created by yjf on 2017/6/6.
 */
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: [{
        time: '12月6日',
        title: '写todo',
        content: 'hahha'
      }, {
        time: '12月7日',
        title: 'matlab作业',
        content: 'hahha'
      }]
    },
    mutations: {
      addTodo (state, todo) {
        state.todos.unshift(todo)
      },
      completeTodo (state, index) {
        state.todos.splice(index, 1)
      },
      deleteTodo (state) {
        state.todos.splice(0, state.todos.length)
      }
    },
    getters: {
      selectTodo: state => {
        return state.todos.filter(todo => todo.title)
      }
    }
  })
}
export default createStore
