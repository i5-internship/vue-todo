<template>
    <div class="list-todo">
        <b-container>

            <div class="row">
                <div class="col-md-12">
                    <br>
                    <div class="row">
                        <div class="col-md-6">
                            <select v-model="selectedStatus">
                                <option disabled value="">Please select one</option>
                                <option v-for="item in status" :value=" item.id ">{{ item.name }}</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <b-nav-form class="float-right">
                                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                            </b-nav-form>
                        </div>
                    </div>
                    <hr>
                    <table width="100%" border="1">
                        <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                name
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="todo in todos">
                            <td>{{ todo.id }}</td>
                            <td>{{ todo.title }}</td>
                            <td>{{ todo.description }}</td>
                            <td>{{ todo.status.name}}</td>
                            <td align="center">
                                <b-button variant="primary" class="btn btn-sm" @click="editTodo(todo.id)">Edit
                                </b-button>
                                <b-button variant="danger" class="btn btn-sm" @click="deleteTodo">Delete</b-button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <hr>
                    <template>
                        <form action="" method="POST">
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" class="form-control" name="title" id="title" v-model="todo.title">
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea class="form-control" rows="10" name="description" id="description" v-model="todo.description"></textarea>
                            </div>
                            <div class="form-group">
                                <select v-model="selectedStatus">
                                    <option disabled value="">Please select one</option>
                                    <option v-for="item in status" :value="item.id">{{ item.name }}</option>
                                </select>
                            </div>
                            <button @click=""></button>
                        </form>
                    </template>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "ListTodo",
        data() {
            return {
                selectedStatus: '',
                status: [],
                todos: [],
                todo: ''
            }
        },
        methods: {
            getStatus() {
                this.$axios.get('http://127.0.0.1:8000/api/status').then((response) => {
                    if (response.data.code === 200) {
                        this.status = response.data.data
                    }
                })
            },
            getTodo() {
                this.$axios.get('http://localhost:8000/api/getshow').then((response) => {
                    if (response.data.code === 200) {
                        this.todos = response.data.data
                    }
                })
            },
            editTodo(id) {
                this.$axios.get('http://localhost:8000/api/getshowbyid/'+ id).then((response) => {
                    if (response.data.code === 200) {
                        this.todo = response.data.data
                        this.selectedStatus = this.todo.status_id
                    }
                })
            },
            deleteTodo() {

            }
        },
        mounted() {
            this.getStatus()
            this.getTodo()
        }
    }
</script>


<style scoped>

</style>