<template>
    <div class="card task" style="width: 18rem">
        <div class="card-body">
            <div v-if="isEditing==false">
                <h5 class="card-title">{{ task.name }}</h5>
                <ul>
                    <li>Date Due: {{ task.dateDue }}</li>
                    <li>Urgency: {{ task.urgency }}</li>
                    <li>Importance: {{ task.importance }}</li>
                </ul>
                
                <button class="btn btn-primary mt-3" @click="editTask">Edit</button>
                <button class="btn btn-primary mt-3 ml-3" @click="deleteTask">Delete</button>
            </div> 
            <TaskForm v-else :initialTask="task" @taskSubmitted='doneEditTask'/>
        </div>
    </div>

</template>

<script>
import TaskForm from './TaskForm'
export default {
    components: {
        TaskForm
    },
    props:['task'],
    data:function(){
        return {
            isEditing: false
        }
    },
    methods:{
        editTask:function(){
            this.isEditing = true;
        },
        doneEditTask:function(newTask) {
            this.$emit('taskUpdated', newTask);
            this.isEditing = false;
        },
        deleteTask:function() {
            this.$emit('taskDeleted', this.task);
        }
    }
}
</script>

<style scoped>
.task {
    margin: 25px;
}
</style>