<template>
    <div>
        <div>
            <div class="queue-item" v-for="(item, index) in queue.getItems()" v-bind:key='index'>
                {{item}}
            </div>
        </div>
        <div>
            <input type="text" v-model='newNumber'/>
            <button @click="addToQueue">Add to queue</button>
            <button @click="removeFromQueue">Remove from queue</button>
        </div>
    </div>
</template>

<script>
import Queue from  '../data-structures/Queue'

export default {    
    data: function(){
        return {
            'queue': new Queue(),
            'newNumber':0
        }
    },
    methods:{
        'addToQueue': function() {
           this.queue.enqueue(this.newNumber);
           this.newNumber = "";
        },
        'removeFromQueue': function() {
            alert(this.queue.dequeue());
        }
    }    
}
</script>

<style scoped>
.queue-item {
    display: inline-block;
    border: 1px solid black;
    text-align: center;
    padding: 20px;
    margin: 20px;
}
</style>