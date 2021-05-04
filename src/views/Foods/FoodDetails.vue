<template>
<div v-if="food">
  <Navbar />
  <div class="container">
    <div class="row my-4">
    <div class="col-md-12">
      <div class="card" style="width:100%">
   <img :src="food.image" style="width:100%;object-fit:contain;height:300px">
  <div class="card-body">
    <h5 class="card-title">{{food.food}}</h5>
    <p class="card-text">{{food.type}}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" v-for="ingredient in food.ingredients">{{ ingredient }}</li>
  </ul>
</div>

    </div>
    
    </div>
  </div>
</div>
<div v-else>
   <Navbar />
  <h3 class="mt-6">Loading food Deatils...</h3>
</div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'

export default {
    name:'FoodDeatils',
    'components':{Navbar},
    data(){
      return{
        food: null,
        id:this.$route.params.id
        
      }
    },
    props:['id'],
    mounted(){
        fetch('http://localhost:3000/foods/'+ this.id)
        .then(res => res.json())
        .then(data => this.food = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>