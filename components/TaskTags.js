export default{
    template:
    `
    <button 
    @click="$emit('change', tag)"
    v-for="tag in tags"
    class="btn badge bg-primary" :class="{
        'bg-success': tag === currentTag
    }" >{{tag}} </button> 

    `,
    props:{
        initialTags: Array,
        currentTag: String
    },
    computed:{
        
        tags(){
            return ['All', ...new Set(this.initialTags)]
        }
    }
}