<template>
  <Navbar />
  <div class="home">
    <h1 class="mb-3">All Foods</h1>
  <Card />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Card
  }
}
</script>
