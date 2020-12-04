<template>
    <div>        
        <input type="text" v-model="num1" placeholder="First number"/>
        <input type="text" v-model="num2" placeholder="Second number"/>
        <h1>Result: {{sum}}</h1>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            'num1': 0,
            'num2': 0
        }
    },
    computed: {
        sum:function(){
            return parseInt(this.num1) + parseInt(this.num2)
        }
    }
}
</script>