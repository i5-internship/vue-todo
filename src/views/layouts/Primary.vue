<template>
    <div class="primary">
        <todo-navbar/>
        <router-view></router-view>
    </div>
</template>

<script>
    import TodoNavbar from "../partials/TodoNavbar";
    export default {
        name: "Primary",
        components: {TodoNavbar}
    }
</script>

<style scoped>

</style>