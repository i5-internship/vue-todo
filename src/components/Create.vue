<template>
    <div class="create">
        <b-container>
            <br>
            <div>
                <label for="title">Title:</label>
                <input class="form-control" type="text" id="title" v-model="title" name="title">
                <label for="desc">Description:</label>
                <textarea class="form-control" type="text" id="desc" v-model="description" name="description"></textarea>
                <label for="status">Status:</label>

                <select v-model="status" class="form-control" id="status">
                    <option v-for="iterm in statuses" v-bind:value="iterm.id" name="status">{{ iterm.name }}</option>]
                </select>

                <button class="btn btn-primary" @click="sendData">
                    Create
                </button>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "Create",
        data () {
            return {
                statuses: null,
                status: '',
                title: '',
                description: ''
            }
        },
        methods: {
            fetchStatus() {
                this.$axios.get('http://127.0.0.1:8000/api/status')
                    .then((response) => {
                            this.statuses = response.data.data

                    })
            },
            sendData(){
                this.$axios.post('http://127.0.0.1:8000/api/store',{
                    title: this.title,
                    status_id: this.status,
                    description: this.description

                })
                    .then((response) => {
                        if(response.data.code === 200) {
                            this.$router.push({name: 'home'})
                        }
                    })
            }

        },
        mounted () {
            this.fetchStatus()
        }
    }
</script>

<style scoped>

</style>