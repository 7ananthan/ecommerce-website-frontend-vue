<template>
  <div>
  <Menu/>
 <Carousel/>
  <Product @cartItems="updateCart"/>
     </div> 
</template>

<script>
import Menu from '../components/Menu';
import Carousel from '../components/Carousel'
import Product from '../components/Product'



export default {
  name: 'HomePage',
  data: () => ({
  
    cartData: [],
  }),

  components: {
 
    Menu,
    Carousel,
    Product,

  
  },
  methods:{
    updateCart(result){
      this.cartData=result;
      // alert(JSON.stringify(this.cartData))
    }
  }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>