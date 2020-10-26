<template>
  <div>
      <v-container>
<v-card
>
    <v-card-action>
              <v-card-title > Delivery Address</v-card-title>
    <div class="details">
        <input v-model="name" placeholder="Enter Name">
        <br>
        <textarea v-model="address" placeholder="Enter address"></textarea><br>
        <input v-model="phone" placeholder="Enter Phone No">
    </div>
    
         </v-card-action>
</v-card>

      </v-container>
        
  </div>
</template>
<script>
export default {
    name:"Checkout"
}
</script>