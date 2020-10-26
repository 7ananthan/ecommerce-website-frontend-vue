<template>
  <div>   
 
    <v-container>
      <v-row :align="center" no-gutters style="height: auto">
        <v-col v-for="product in PRODUCTS" :key="product.productName" :cols="6">
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
              <v-card-text > Rs {{product.productPrice}} </v-card-text>
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
import {mapGetters} from 'vuex';
import axios from "axios";
export default {
 
  name: "Product",
  data: () => ({
    cart: [],
   
  }),
  
  async mounted() {
     this.$store.dispatch('GET_PRODUCTS')
  },
  computed : {
              ...mapGetters(['PRODUCTS']),
   
      },
  methods: {
    addCart(product) {
       {
        this.$store.dispatch('ADD_TOCART',product)
            }
            
           
    },
  },
};
</script>