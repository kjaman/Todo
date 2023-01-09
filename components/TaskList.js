import Task from "./Task.js"
import TaskTag from "./TaskTags.js";
export default{
    components:{
        Task,
        TaskTag
    },
    template:`

    <div v-show="tasks.length">
    <h3>{{title}} <span class="badge rounded-pill bg-primary">{{tasks.length}}</span></h3>

    <task-tag @change="currentTag=$event" :initial-tags="tasks.map(a => a.tag)" :current-tag="currentTag"></task-tag>
    <div class="list-group">
        <task v-for="task in filetredTask" :key="task.id" :task="task"></task>
        </div>
    </div>
    `,
    data(){
        return {
          currentTag: 'All'   
        };
    },
    props:{
        tasks: Array,
        title: String
    },
    methods:{
        AcurrentTag(tag){
            this.currentTag = tag
        }
    },
    computed:{
        filetredTask(){
            if(this.currentTag === 'All'){
                return this.tasks
            }
            
            return this.tasks.filter(a => a.tag === this.currentTag);
        }
    }

}