<template>
<div>
  <div>
  <Navbar :insideCart ="cartData"/>
  </div>
  <div><Menu/></div>
 <div><Carousel/></div> 
 <div><Product @cartItems="updateCart"/></div> 
 
    </div>
  </template>

<script>
import HelloWorld from './components/HelloWorld';
import Menu from './components/Menu';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Product from './components/Product'
import MyCart from './components/MyCart'

export default {
  name: 'App',
  data: () => ({
  
    cartData: [
     
    ],
  }),

  components: {
    Navbar,
    Menu,
    Carousel,
    Product,
    MyCart,
   
    HelloWorld,
  },
  methods:{
    updateCart(result){
      this.cartData=result;
    }
  }

};
</script>