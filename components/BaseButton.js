export default {
    template: ` 
    <button class="btn" type="button" :class="{
        'btn-primary': btntype === 'primary',
        'btn-secondary': btntype === 'secondary'
    }" btntype="primary">
    <slot></slot>
    </button>
    `,
    props:{
        btntype: {
            type: String,
            default: 'primary'
        }
    }
}