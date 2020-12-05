<template>
    <div v-bind:style="{backgroundColor:bgColor}" class="box">
        {{content}}
        <button @click="reset">Reset Background Color</button>
    </div>
</template>

<script>
export default {
    data: function(){
        return {

        }
    },
    props:['bgColor', 'content'],
    methods:{
        reset:function(){
            this.$emit('reset_backgroundColor')
        }
    }
}
</script>

<style scoped>
.box {
    height: 200px;
    width: 200px;
}
</style>