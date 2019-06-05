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

    }
}

const mutations = {}

export default {
    state,
    getters, 
    actions, 
    mutations
}