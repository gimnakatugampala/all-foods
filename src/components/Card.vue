<template>
<div class="container">
  <div class="component" v-if="foods.length">
 <div v-for="food in foods" class="card" style="width: 18rem;" :key="food.id">
  <img :src="food.image" class="card-img-top" :alt="food.image">
  <div class="card-body">
    <h5 class="card-title">{{ food.food }}</h5>
    <h4> - Ingredients - </h4>
    <p class="card-text" v-for="ingredient in food.ingredients">{{ingredient}}</p>
  </div>
    <h5 class="type">{{food.type}}</h5>
        <router-link :to="{ name: 'FoodDetails' ,params:{id:food.id}}">
        <button class="btn btn-outline-success my-4">Read More</button>
      </router-link>
  </div>
</div>
<div v-else>
  <img src="../assets/loading.gif" class="mt-5">
  <h3>Loading...</h3>
</div>
</div>
</template>

<script>
export default {
  data(){
    return{
      foods:[],
      
    }
  },
  mounted(){
    fetch('http://localhost:3000/foods')
    .then(res => res.json())
    .then(data => {
      this.foods = data
      })
  }

}
</script>

<style>

.card-img-top{
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.component{
  margin: auto;
  max-width: 1000px;
}

.card-text{
  background: #333;
  color: white;
  border-radius: 14px;
  display: inline-block;
  margin-right: 10px;
  padding: 5px;
}
.type{
  background: rgb(24, 117, 24);
  color: white;
  padding: 10px;
}
.card{
  display: inline-block;
  margin-bottom: 10px;
  margin: 5px 10px 10px 10px;
  text-decoration: none;

}
.card-title{
  background: rgb(187, 175, 175);
  border-radius: 15px;
  padding: 10px;
}
</style>