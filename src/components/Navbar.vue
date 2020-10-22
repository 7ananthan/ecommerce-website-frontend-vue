<template>
    <div class="nav-bar">   
      <template>
  <v-card
    color="grey lighten-4"
    flat
    height="60"
    tile
  >
    <v-toolbar dense>
      <v-toolbar-side-icon>
        <v-img src="../assets/logo.jpg" height="30px" width="40px"/>
    </v-toolbar-side-icon> 
        
      

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
            
       <v-badge
        color="#3F51B5"
        :content="cartCount"
         >
          <v-icon>
            mdi-cart
          </v-icon>
        </v-badge>
        
      
      </v-btn>

      <v-btn icon>
        
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>
    
    </div>
     
</template>

<script>

export default {
    name:"Navbar",
    props:{
      insideCart :Array
    },
    computed: {
    cartCount() {
      return this.insideCart.length;
    },
  },
  
    
}
</script>
<style scoped>

</style>