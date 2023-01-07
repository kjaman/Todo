export default{
    template:`
        <div class="list-group-item">
        <div class="form-check">
            <label class="form-check-label">
            <input class="form-check-input" type="checkbox" v-model="task.status">
                {{task.title}}
            </label>
        </div>
        </div>
    `,
    props:{
        task: Object
    }
}