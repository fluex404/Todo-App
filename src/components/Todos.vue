<template>
    <div class="container">
        <h3>Todos</h3>
        <div class="bg-success text-white p-2 m-1 d-inline-block" v-for="todo in allTodos" :key="todo.id">
            {{ todo.title }}
            <button class="badge border rounded-circle badge-danger" @click.prevent="deleteTodo(todo.id)">x</button>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Todos",
    computed: {
        ...mapGetters(['allTodos']),
    },
    methods: {
        ...mapActions(['fetchTodos','deleteTodo'])
    },
    mounted(){
        this.fetchTodos()
    }
}
</script>

<style>

</style>
