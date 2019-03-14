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
                    <table class="table table-bordered table-hover table-striped">
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
                        <template v-if="todos.length > 0">
                            <tr v-for="(todo, key) in todos">
                                <td>{{ key+1 }}</td>
                                <td>{{ todo.title }}</td>
                                <td>{{ todo.description }}</td>
                                <td>{{ todo.status.name}}</td>
                                <td align="center">
                                    <b-button variant="primary" style="margin-right: 2px;" class="btn btn-sm" @click="editTodo(todo.id)">Edit
                                    </b-button><b-button variant="danger" class="btn btn-sm" @click="deleteTodo(todo.id)">Delete</b-button>
                                </td>
                            </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="5" class="text-center">No records.</td>
                            </tr>
                        </template>
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
                                <textarea class="form-control"  name="description" id="description" v-model="todo.description"></textarea>
                            </div>
                            <div class="form-group">
                                <select v-model="selectedStatus">
                                    <option disabled value="">Please select one</option>
                                    <option v-for="item in status" :value="item.id">{{ item.name }}</option>
                                </select>
                            </div>
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
                this.$axios.post('http://localhost:8000/api/getshow').then((response) => {
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
            deleteTodo(id) {
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value === true) {
                        this.$axios.get('http://localhost:8000/api/delete/'+ id).then((response)=>{
                            if(response.data.code === 200) {
                                this.getTodo()
                                this.$swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                    }
                })

            },
        },
        mounted() {
            this.getStatus()
            this.getTodo()
        }
    }
</script>


<style scoped>

</style>