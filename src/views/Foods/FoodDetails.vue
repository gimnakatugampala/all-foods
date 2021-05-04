<template>
<div v-if="food">
  <p>The food ID is {{ id }}</p>
</div>
<div v-else>
    <!-- <img src="../assets/loading.gif" class="mt-5"> -->
  <p>Loading food Deatils...</p>
</div>
</template>

<script>
export default {
//   data(){
//       return{
//           id:this.$route.params.id
//       }
//   }
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