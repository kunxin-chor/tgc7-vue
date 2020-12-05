<template>
    <div class="counter">
        {{this.number}}
    </div>
</template>

<script>
export default {
    props:['number']
}
</script>

<style scoped>
.counter {
    width: 250px;
    height: 250px;
    text-align:center;
    border:1px black solid;
}
</style>