<template>
  <div>
    <h1>Products</h1>
    <input type="text" v-model="product" placeholder="Product"/>
    <ul>
      <li v-for="(eachProduct, index) in filteredProducts" :key="index">
          {{eachProduct.title}} -- ${{eachProduct.price}}
      </li>
    </ul>
    <h2>Total so far: {{totalPrice}}</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async created() {
    let response = await axios.get("products.json");
    this.products = response.data;
  },
  data: function () {
    return {
      products: [],
      product: ""
    };
  },
  computed: {
      filteredProducts:function(){
          let filtered = this.products.filter((eachProduct)=>{
              return eachProduct.title.toLowerCase().includes(this.product.toLowerCase())
          })
          return filtered;
      },
      totalPrice:function(){
          return this.filteredProducts.reduce((totalSoFar, eachProduct)=>{            
                return totalSoFar + eachProduct.price;
          }, 0);
      }
  }
};
</script>

<style>
</style>