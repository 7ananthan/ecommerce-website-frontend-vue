<template>
  <div>   
     <Navigation cart = "cart"/>
    <v-container>
      <v-row :align="center" no-gutters style="height: auto">
        <v-col v-for="product in products" :key="product.productName" :cols="6">
          <v-card class="pa-2" outlined tile :align="center">
            <v-img
              :src="product.productImage"
              contain
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400"
              width="auto"
            >
            </v-img>
            <v-card-action>
              <v-card-title v-text="product.productName"> </v-card-title>
              <v-card-subtitle v-text="product.productPrice"> </v-card-subtitle>
              <v-btn @click="addCart(product)" color="blue"> buy</v-btn>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
      <br />
          </v-container>
  </div>
</template>

<script>

import axios from "axios";
export default {
 
  name: "Product",
  data: () => ({
    cart: [
     
    ],
    products: [],
  }),
  
  async mounted() {
    let { data } = await axios.get(
      "http://localhost:5000/api/v1/product/allproducts"
    );
    this.products = data;
    console.log = data;
  },
  methods: {
    addCart(product) {
       {
        this.cart.push(product)
        this.$emit("cartItems",this.cart)
            }
            // alert(JSON.stringify(this.cart))
    },
  },
};
</script>