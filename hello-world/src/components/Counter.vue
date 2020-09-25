<template>
    <div>
        <div v-bind:class="style">
            {{count}}
        </div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <p v-if="count % 2 ==0">
        Count is even
        </p>
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
    },
    computed: {
        style:function() {
            if (this.count % 2 == 0) {
                return 'box green'
            } else {
                return 'box red'
            }
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

.red {
    color: red;
}

.green {
    color: green;
}
</style>