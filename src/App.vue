<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <Todos />
    </div>
  </div>
</template>

<script>

import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

export default {
  name: "app",
  data() {
    return {
    };
  },
  components: {
    Todos,
    AddTodo
  }
};
</script>
