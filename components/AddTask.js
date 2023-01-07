export default{
    template: `
    <form @submit.prevent="addTask">
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Task Title" v-model="newTask">
        <button class="btn btn-outline-secondary" type="submit">Add</button>
    </div>
    </form>
    `,
    data(){
        return {
            newTask:""
        }
    },
    methods:{
        addTask(){
            this.$emit('addmytask', this.newTask)
            this.newTask= ""
        }
    }
}