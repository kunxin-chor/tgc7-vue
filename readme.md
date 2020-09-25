# Installing Vue CLI

At the terminal, type in:

```
npm install -g @vue/cli
```

# Creating a project

At the terminal, type in

```
vue create <project-name>
```

For example, if we want to create a new project named `hello-world`, we type in:

```
vue create hello-world
```

# Dealing with invalid host header

When on Gitpod, you may get an `Invalid host header` error. To fix that, create the following file in the project directory:

```
// vue.config.js
module.exports = {
    // options...
    devServer: {
        disableHostCheck: true
    }
}
```

Make sure to re-run `yarn serve` if you have already done so.

# The .vue file

A Vue component can be stored entirely in a .vue file format. There are
three parts to it:

- the template
- the script
- the css

## Component

A component is a reusable template with logic and state.

```
<script>
export default {
    name: "TemplateDemo",
    data: function() {
        return {
            firstName: "Tan",
            lastName: "Ah Kow"
        }
    }
}
</script>
```

`data` refers to the component state.

# Templates

Vue has its own Template syntax for template, within the
`<template>` tags.

```
<template>
    <div>
        <h1>My first Vue application</h1>
        <p>Hello {{firstName}} {{lastName}}</p>
    </div>
</template>
```

To refer to `data`, we just use its variable name directly in the
template, there is no need to put `this` in front of it.

## Simple Counter Example

```
<template>
    <div>
        <div class="box">
            {{count}}
        </div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
export default {
    name: "Counter",
    data: function() {
        return {
            count:0
        }
    },
    methods:{
        increment:function(){
            this.count++;
        },
        decrement:function(){
            this.count--;
        }

    }
}
</script>

<style>
.box {
    border:1px black solid;
    padding:10px;
    width: 50px;
    height: 50px;
    text-align:center;
}
</style>
```

**Notes:**

- _methods_ contain all the functions that will be called by the components.
- `@click` allows us to bind click to a method
- a `computed` property only updates when the state changes
- `v-if` will only display the element if the condition inside it is evaluated to true
- `v-bind` allow us to set the attribute of an element to a JavaScript expression, which in turn
  can be a state variable or a computed property

# Todo List Example

## List Rendering

```
<template>
  <div>
    <h1>Task List</h1>
    <ul>
        <li v-for="t in tasks" v-bind:key="t.id">
            {{t.name}} - {{t.done ? "Done" : "In Progress"}}
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "TaskList",
  data: function() {
    return {
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
  }
};
</script>
```

- We use `v-for` repeat a number of elements in an array.

## Form Binding

Add the following to the template to allow adding of a new task:

```
<div>
        <label>Task Name</label>
        <input type="text" v-model='newTaskName'/>
        <button @click="add">Add</button>
</div>
```

Define in the data a new string variable `newTaskName`, and also
in the `methods`, an `add` function. The details of the
function is as below:

```
 add:function(){
          this.tasks.push({
              id: Math.floor(Math.random()*10000+9999),
              name: this.newTaskName,
              done:false
          })
      }
```

### Bind to checkbox

We can also bind a value to a checkbox as well:

```
<li v-for="t in tasks" v-bind:key="t.id">
    {{t.name}} - <input type="checkbox" v-model="t.done"/>
</li>
```

Now whether the task is done or not is shown via a check in the checkbox.

### Detect change on checkbox

