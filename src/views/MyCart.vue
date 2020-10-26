<template>
  <div class="checkout-box">
    <ul class="checkout-list">
      <transition-group name="fade">
      <ul v-for="cart in CART" :key="cart.productName" class="checkout-product">
        <img :src="cart.productImage" alt="" class="product-image">
        <h3 class="product-name">{{ cart.productName }}</h3>
        <span class="product-price">Rs {{ cart.productPrice }},00 </span>
       
      </ul>
      </transition-group>
    </ul>
    
    <v-btn @click="checkout()" >
      
      Checkout
    </v-btn>
   
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from "axios";

export default {
  name: "MyCart",
  props:{
      insideCart :Array
    },
    data: () => ({
     cart: [
       {
        "_id": "5f8e98f602242d3271e0b3ca",
        "productName": "EYEBOGLER",
        "productDescription": "Regular Fit Men's Poly Cotton Tshirt",
        "productImage": "https://m.media-amazon.com/images/I/61hwn8Gx3GL._AC_UL320_.jpg",
        "productPrice": 395,
        "__v": 0
    },
    {
        "_id": "5f8e995e02242d3271e0b3cb",
        "productName": "AWG - All Weather Gear",
        "productDescription": "AWG Men's Dryfit Polyester Round Neck",
        "productImage": "https://m.media-amazon.com/images/I/71CF7jRT2ML._AC_UL320_.jpg",
        "productPrice": 289,
        "__v": 0
    },
    {
        "_id": "5f8e999702242d3271e0b3cc",
        "productName": "US Polo Association",
        "productDescription": "U.S. Polo Assn. Men T-Shirt",
        "productImage": "https://m.media-amazon.com/images/I/814qtDhF22L._AC_UL320_.jpg",
        "productPrice": 399,
        "__v": 0
    },
    {
        "_id": "5f8e99cf02242d3271e0b3cd",
        "productName": "London Hills",
        "productDescription": "Men's Regular Fit T-Shirt (Pack of 4)",
        "productImage": "https://m.media-amazon.com/images/I/71FcnmkBQ5L._AC_UL320_.jpg",
        "productPrice": 699,
        "__v": 0
    },
    {
        "_id": "5f8e9a0602242d3271e0b3ce",
        "productName": "Amazon Brand - Symbol",
        "productDescription": "Men's Printed Regular Fit Half Sleeve Cotton T-Shirt",
        "productImage": "https://m.media-amazon.com/images/I/716Til2beGL._AC_UL320_.jpg",
        "productPrice": 239,
        "__v": 0
    },
    {
        "_id": "5f8e9a8002242d3271e0b3cf",
        "productName": "adidas",
        "productDescription": "Men's Plain Regular Fit T-Shirt",
        "productImage": "https://m.media-amazon.com/images/I/71zsI+MDVFL._AC_UL320_.jpg",
        "productPrice": 649,
        "__v": 0
    }
     ]
    }),
    methods:
    {
      checkout(){
        {
          this.$router.push({name : 'checkout'}) 
        }
      }
    },
    computed : {
              ...mapGetters(['CART']),
   
      },
    
};
</script>

<style scoped>
  .checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
  }

  .checkout-list {
    padding: 0;
  }

  .checkout-product {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }

  .checkout-product * {
    place-self: center;
  }
  .product-image {
    grid-column: 1/2;
    width: 50%;
  }

  .product-name {
    box-sizing: border-box;
  }

  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }
  
  </style>
