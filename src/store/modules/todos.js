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
    },

    async deleteTodo({ commit }, id) {
        await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        commit('removeTodo', id)
    },

    async filterTodo({ commit }, e) {
        
        // const limit = parseInt(e.target.options[e.target.selectedIndex].innerText)
        const limit = parseInt(e.target.value)

        // console.log(limit)
        const res = await Axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        
        commit('setTodos', res.data)    
    },

    async updateTodo({ commit }, updTodo) {
        await Axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`)

        commit('updTodo', updTodo)
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => (state.todos.unshift(todo)),
    removeTodo: (state, id) => (state.todos = state.todos.filter(t => (t.id !== id))),
    updTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)
        if(index !== -1) {
            state.todos.splice(index, 1, updTodo)
        }
    }
}

export default {
    state,
    getters, 
    actions, 
    mutations
}