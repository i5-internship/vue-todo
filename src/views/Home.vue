<template>
  <div class="home">
    <index msg="Welcome to Your Vue.js App"/>
    <list-todo/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from "../components/Index";
import ListTodo from "../components/ListTodo";

export default {
  name: 'home',
  components: {
    ListTodo,
    Index,
  }
}
</script>
