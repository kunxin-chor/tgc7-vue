<template>
    <div>
        <TemplateDemo/>
        <Counter/>
    </div>
</template>

<script>
import TemplateDemo from './components/TemplateDemo.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
     TemplateDemo,
     Counter
  }
}
</script>

<style>

</style>
