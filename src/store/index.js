import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(axios)

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      products:[],
      cart: []
  },
  getters : {
    PRODUCTS: state => {
        return state.products
    },
        CART: state => {
          return state.cart
      }
  },
  mutations: {
    SET_PRODUCTS : (state,payload) => {
        state.products = payload
        
    },
      TOCART :(state,payload) =>{
          state.cart.push(payload)
          alert(JSON.stringify(state.cart))
      }
  },
  actions : {
      GET_PRODUCTS : async (context) => {
          let {data} = await axios.get(
            "http://localhost:5000/api/v1/product/allproducts"
          );
          context.commit("SET_PRODUCTS",data)
      },
      ADD_TOCART : async(context,payload) => {
        context.commit("TOCART",payload)
      }
  }  
})