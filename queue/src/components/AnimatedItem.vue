<template>
  <div class="animated-item"></div>
</template>

<script>
import Queue from "../data-structures/Queue";
import { gsap } from "gsap";
export default {
  created() {
    this.animation.enqueue(
       { opacity: 1, x: 500, duration: 2, onComplete: this.playNextAnimation }
    )
   
    this.animation.enqueue(
       { y: 500, duration: 2, onComplete: this.playNextAnimation }
    )
    
  },
  mounted() {    
    // this.playNextAnimation();
  },
  data: function() {
    return {
      animation: new Queue()
    };
  },
  methods: {
    playNextAnimation: function() {
     if (this.animation.peek() != null) {
        let currentAnimation = this.animation.dequeue();
        gsap.to(this.$el, currentAnimation);
      }
    }
  }
};
</script>

<style scoped>
.animated-item {
  height: 150px;
  width: 150px;
  border: 1px black solid;
}
</style>
