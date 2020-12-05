<template>
    <div>
        <div class="row">
            <Box v-bind:bgColor="box1Color" content="1" @reset_backgroundColor="resetBox1"/>
            <Box v-bind:bgColor="box2Color" content="2" @reset_backgroundColor="resetBox2"/>            
        </div>
        <h1>Select box color</h1>
        <div>
            <label>Box 1</label>
            <select v-model="box1Color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </div>
        <div>
            <label>Box 2</label>
            <select v-model="box2Color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </div>
    </div>
</template>

<script>
import Box from './Box.vue'
export default {
    components:{
        Box
    },
    data:function(){
        return {
            'box1Color':'white',
            'box2Color':'white'
        }
    },
    methods: {
        resetBox1:function() {
            this.box1Color = 'white'
        },
        resetBox2:function() {
            this.box2Color = 'white'
        }

    }
}
</script>

<style scoped>
.row {
    display:flex;
    flex-direction:row;
    justify-content:space-around;
}
</style>