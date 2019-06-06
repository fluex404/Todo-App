import Axios from "axios";

const state = {
    todos: []
}

const getters = {
    allTodos: (state) => state.todos
}

const actions = {
    async fetchTodos({ commit }) {
        const res = await Axios.get('https://jsonplaceholder.typicode.com/todos')
        
        commit('setTodos', res.data)
    },

    async addTodo({ commit }, title) {
        const res = await Axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: title,
            completed: false
        })

        console.log(title)

        commit('newTodo', res.data)
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => (state.todos.unshift(todo))
}

export default {
    state,
    getters, 
    actions, 
    mutations
}