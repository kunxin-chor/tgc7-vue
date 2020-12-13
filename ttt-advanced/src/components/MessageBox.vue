<template>
  <div class="message-box" v-if='visible'>
    <p>
      {{ message }}
    </p>
    <div style="text-align:center">
      <button @click='okPressed'>Ok</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message", "visible"],
  methods: {
      'okPressed':function() {
          this.$emit('on_ok')
      }
  }
};
</script>

<style scoped>
.message-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
}
</style>
