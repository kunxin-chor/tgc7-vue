<template>
    <div>
        <h1>Todos</h1>
        <div>
            <input type="text" placeholder="Task name" v-model="newTaskName"/>
            <button @click="addNewTask">Add</button>
        </div>
        <ul>
            <li v-for='t in tasks' v-bind:key='t'>{{t}} <button @click="deleteTask(t)">X</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    data:function() {
        return {
            'tasks':[
                "Clean the car",
                "Wash the clothes",
                "Pay the bills"
            ],
            'newTaskName':''
        }
    },
    methods: {
        addNewTask:function() {
            this.tasks.push(this.newTaskName);
            this.newTaskName = "";
        },
        deleteTask:function(task) {
            // get the index to delete
            let indexToDelete = this.tasks.indexOf(task);
            this.tasks.splice(indexToDelete, 1)
        }
    } 
}
</script>

<style scoped>

</style>