<template>
    <div class="Navbar">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-container>
                <b-navbar-brand >Todo list</b-navbar-brand>

                <b-navbar-brand ><router-link :to="{name:'create'}">Create New</router-link></b-navbar-brand>

                <b-navbar-toggle target="nav_collapse"/>

                <b-collapse is-nav id="nav_collapse">
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "TodoNavbar"
    }
</script>

<style scoped>

</style>