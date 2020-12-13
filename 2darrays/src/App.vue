<template>
  <div id="app">
      <table>
          <tr v-for='(row,rindex) in numbers' v-bind:key="rindex">
              <td v-for='(col, cindex) in row' v-bind:key="rindex*3+cindex" @click="update(rindex,cindex)">
                  {{col}}
              </td>
          </tr>
      </table>
  </div>
</template>

<script>


export default {
    data:function(){
        return {
            numbers:[
                [1, 3, 7],
                [4, 6, 9],
                [10, 15, 17]
            ]
        }
    },
    methods:{
        update:function(rindex, cindex) {
            let oldValue = this.numbers[rindex][cindex];
            this.$set(this.numbers[rindex], cindex, oldValue+1 )
        }
    }
}
</script>

<style>

</style>
