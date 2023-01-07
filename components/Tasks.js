import TaskList from "./TaskList.js"
import AddTask from "./AddTask.js"
export default{
    components:{
        TaskList,
        AddTask
    },
    template:`
    <div class="container">
    <task-list title="In Progress" :tasks="filters.inprogress"></task-list>

    <task-list title="Completed" :tasks="filters.completed"></task-list>
    <hr>
    <h2> Add a new task</h2>
    <add-task @addmytask="addTask"></add-task>
    </div>
    `,

    data(){
        return{
            tasks:[
                {title: 'Task one', status: false, id: 1},
                {title: 'Task two', status: false, id: 2},
                {title: 'Task Three', status: false, id: 3},
                {title: 'Task Four', status: false, id: 4},
            ]
           
        }
    },
    computed:{

        filters(){
            return{
                inprogress: this.tasks.filter(item => !item.status),
                completed: this.tasks.filter(item => item.status)
            }
        }
        
    },
    methods: {
        addTask(ttitle){
            this.tasks.push({
                title: ttitle,
                status: false,
                id: this.tasks.length + 1
            }
            )
        }
    },
}