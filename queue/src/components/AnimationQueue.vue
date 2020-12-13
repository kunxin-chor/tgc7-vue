<template>
    <div>
        <div>
            <button @click="beginAnimate">Animate</button>
        </div>
        <AnimatedItem ref="item"/>
        
    </div>
</template>

<script>
import AnimatedItem from './AnimatedItem'
export default {
    components: {
        AnimatedItem
    },
    methods:{
        beginAnimate:function() {
            this.$refs.item.playNextAnimation();
        }
    }
}
</script>