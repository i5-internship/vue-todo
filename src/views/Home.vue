<template>
  <div class="home">
    <index msg="Welcome to Your Vue.js App"/>
    <create/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from "../components/Index";
import Create from "../components/Create";

export default {
  name: 'home',
  components: {
    Create,
    Index,
  }
}
</script>
