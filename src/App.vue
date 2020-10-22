<template>
<div>
  <Navbar/>
  <Menu/>
  <Carousel/>
  <Product/>
  <MyCart/>
  
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

  components: {
    Navbar,
    Menu,
    Carousel,
    Product,
    MyCart,
   
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>