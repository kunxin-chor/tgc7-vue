<template>
  <div>
    <h1>Task List</h1>
    <ul>
      <li v-for="t in tasks" v-bind:key="t.id">
        {{ t.name }}  
        <input type="checkbox" v-model="t.done" @click="updateDone(t)" />
        <button @click="deleteTask(t)">Delete</button>
      </li>
    </ul>
    <div>
      <label>Task Name</label>
      <input type="text" v-model="newTaskName" />
      <button @click="add">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data: function() {
    return {
      newTaskName: "",
      tasks: [
        {
          id: 1,
          name: "Pay the bill",
          done: false
        },
        {
          id: 2,
          name: "Wash the car",
          done: true
        },
        {
          id: 3,
          name: "Buy grocery",
          done: false
        }
      ]
    };
  },
  methods: {
    add: function() {
      this.tasks.push({
        id: Math.floor(Math.random() * 10000 + 9999),
        name: this.newTaskName,
        done: false
      });
    },
    updateDone: function(task) {
      task.done = !task.done;
    },
    deleteTask:function(task){

        let index = this.tasks.indexOf(task);

        // find index 
        this.tasks.splice(index, 1);
    }
  }
};
</script>

<style></style>
