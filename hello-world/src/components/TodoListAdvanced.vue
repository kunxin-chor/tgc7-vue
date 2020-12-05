<template>
  <div>
    <h1>Task</h1>
    <div id="tasklist">
        <Task v-for='t in tasks' :key='t.id' :task='t' @taskUpdated='updateTask'/>
    </div>
    
    <h1>New Task</h1>
    <TaskForm :initialTask="{}" @taskSubmitted="addTask"/>
    
  </div>
</template>

<script>
import Task from './Task.vue'
import TaskForm from'./TaskForm.vue'

export default {
  components:{
      Task,
      TaskForm
  },
  data: function() {
    return {
      tasks: [
        {
          id: 1,
          name: "Wash the car",
          urgency: "not-urgent",
          importance: "average",
          dateDue: "2020-12-31"
        }
      ],
      taskBeingEdited:0
    }
  },
  methods:{
      addTask:function(newTask) {
          let taskToAdd = {...newTask};
          taskToAdd.id = Math.floor(Math.random() * 100000 + 9999);
          this.tasks.push(taskToAdd);
      },
      updateTask:function(task) {          
          let taskIndex = this.tasks.findIndex( t => t.id == task.id);          
          this.$set(this.tasks, taskIndex, task);
      }
  }
};
</script>

<style scoped>
#tasklist {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>