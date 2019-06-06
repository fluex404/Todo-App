<template>
    <div>
        <div class="container">
            <div class="form-group">
                <input type="text" class="form-control-sm border" v-model="title" @keyup.enter="onSubmit">
                <button type="submit" class="btn-sm btn-success border" @click.prevent="onSubmit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'AddTodo',
    data: () => ({
        title: ''
    }),
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(){
            console.log('on submit')
            this.addTodo(this.title)
            this.title=''
        }
    }
}
</script>

<style>

</style>
