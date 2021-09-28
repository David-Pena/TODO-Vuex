import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        todo: null,
    },
    mutations: {
        addTodo(state) {
            state.todos = [state.todo, ...state.todos]
        }
    },
    actions: {
        addTodoAction(context) {
            context.commit('addTodo')
        }
    },
    getters: {

    }
})