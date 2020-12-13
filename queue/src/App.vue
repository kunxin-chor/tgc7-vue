<template>
  <div id="app">
      <QueueExample/>
      <AnimationQueue/>
  </div>
</template>

<script>
import QueueExample from './components/QueueExample';
import AnimationQueue from './components/AnimationQueue'

export default {
  name: 'App',
  components: { 
      AnimationQueue,
      QueueExample
  }
}
</script>

<style>

</style>
