<template>
  <div>

         <v-carousel
         
       :show-arrows="false"
       
     cycle
     height="auto"
   
    hide-delimiter-background
    show-arrows-on-hover
     
     >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
     ></v-carousel-item>
  </v-carousel>
     
  </div>
</template>

<script>
export default {
    name:"Carousel",
    data () {
      return {
        items: [
          {
            src: 'https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/NSM-AUG/MA-2._CB406552376_.jpg',
          },
          {
            src: 'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/newseasonflip/wapc._SX3000_QL85_.jpg',
          },
          {
            src: 'https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/NewSeason/AF/Header/PC/afpc._CB406501398_.jpg',
          },
          
        ],
      }
    },
    
}
</script>
<style scoped>

  
</style>
