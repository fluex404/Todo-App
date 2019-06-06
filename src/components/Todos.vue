<template>
  <div class="container">
    <h3>Todos</h3>
    <div>
      <span class="bg-success pr-2 pl-2 mr-2"></span> incompleted
      <span class="bg-dark pr-2 pl-2 mr-2"></span> completed
    </div>
    <div
      class="bg-success text-white p-2 m-1 d-inline-block"
      v-for="todo in allTodos"
      :key="todo.id"
      @dblclick="onDblClick(todo)"
      :class="{'bg-dark': todo.completed}"
      style="cursor: pointer"
    >
      {{ todo.title }}
      <button
        class="badge border rounded-circle badge-danger"
        @click.prevent="deleteTodo(todo.id)"
      >x</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  computed: {
    ...mapGetters(["allTodos"])
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo){
        const updTodo = {
            id: todo.id,
            title: todo.title,
            completed: !todo.completed
        }

        this.updateTodo(updTodo)
    }
  },
  mounted() {
    this.fetchTodos();
  }
};
</script>

<style>
</style>
