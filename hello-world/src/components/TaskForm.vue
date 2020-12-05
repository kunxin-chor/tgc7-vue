<template>
    <div>
        <div>
            <label class="form-label">Task Name</label>
            <input type="text" v-model="task.name" class="form-control"/>
        </div>
        <div>
            <label class="form-label">Date Due</label>
            <input type="date" v-model="task.dateDue" class="form-control"/>
        </div>
        <div>
            <label class="form-label">Importance</label>
            <div>
                <div class="form-check form-check-inline">
                    <input type="radio" name="importance" value="not-urgent" class="form-check-input" v-model="task.importance">Not important
                </div>            
                 <div class="form-check form-check-inline">
                    <input type="radio" name="importance" value="average" class="form-check-input" v-model="task.importance">Average
                </div>     
                <div class="form-check form-check-inline">
                    <input type="radio" name="importance" value="important" class="form-check-input" v-model="task.importance">Important
                </div>     
            </div>
        </div>
        <div>
            <label class="form-label">Urgency</label>
            <div>
                <div class="form-check form-check-inline">
                    <input type="radio" name="urgency" value="not-urgent" class="form-check-input" v-model="task.urgency">Not urgent
                </div>            
                 <div class="form-check form-check-inline">
                    <input type="radio" name="urgency" value="average" class="form-check-input" v-model="task.urgency">Average
                </div>     
                <div class="form-check form-check-inline">
                    <input type="radio" name="urgency" value="critical" class="form-check-input" v-model="task.urgency">Critical
                </div>     
            </div>
        </div>
        <button @click="submit" class="btn btn-primary mt-3">Submit</button>
    </div>
</template>

<script>
export default {
    props:['initialTask'],
    data:function(){
        return {
            task: {...this.initialTask},
        }
    },
    methods:{
        submit: function(){
            this.$emit('taskSubmitted', this.task)
        }
    }
}
</script>

