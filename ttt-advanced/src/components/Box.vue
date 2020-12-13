<template>
  <td
    @click="click"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{ active: this.content == '' && hover, invalid: this.content != '' && hover }"
  >
    {{ content }}
  </td>
</template>

<script>
export default {
  props: ["content", "rindex", "cindex"],
  methods: {
    click: function() {
      if (this.content == "") {
        this.$emit("valid_move", this.rindex, this.cindex);
      } else {
        this.$emit("invalid_move", this.rindex, this.cindex);
      }
    }
  },
  data: function() {
    return {
      hover: false
    };
  }
};
</script>

<style scoped>
td {
  border: 1px solid black;
  height: 200px;
  width: 200px;
  font-size: 32px;
  text-align: center;
}

.active {
    background-color: azure;
    cursor: pointer;
}

.invalid {
    background-color:firebrick;
    cursor: default;
}
</style>
