<template>
  <div class="home">
    <Navbar />
    <h2 class="mt-2 ml-4"><b>Product List</b></h2>
    <div class="d-flex flex-row justify-content-center flex-wrap">
      <ProductList v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductList
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>
