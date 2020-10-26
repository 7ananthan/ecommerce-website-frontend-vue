<template>
<v-app>
     <Navbar :insideCart ="cartData"/>
     <v-main>
            <router-view></router-view>
    </v-main>
     <MyFooter/>
</v-app>
</template>

<script>

import Navbar from './components/Navbar'
import MyFooter from './components/Footer'



export default {
  name: 'App',
  data: () => ({
  
    cartData: [
     
    ],
  }),

  components: {
    Navbar,
    MyFooter,
    
  },

};
</script>