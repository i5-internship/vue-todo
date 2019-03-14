<template>
  <div class="home">
    <index msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from "../components/Index";

export default {
  name: 'home',
  components: {
    Index,
  }
}
</script>
