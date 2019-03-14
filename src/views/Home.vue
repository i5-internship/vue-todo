<template>
  <div class="home">
    <index msg="Welcome to Your Vue.js App"/>
    <create/>
    <list-todo/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from "../components/Index";
import Create from "../components/Create";
import ListTodo from "../components/ListTodo";

export default {
  name: 'home',
  components: {
    Create,
    ListTodo,
    Index,
  }
}
</script>
