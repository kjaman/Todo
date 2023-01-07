import Task from "./Task.js"
export default{
    components:{
        Task
    },
    template:`

    <div v-show="tasks.length">
    <h1>{{title}}</h1>
    <div class="list-group">
        <task v-for="task in tasks" :key="task.id" :task="task"></task>
        </div>
    </div>
    `,
    props:{
        tasks: Array,
        title: String
    }
}