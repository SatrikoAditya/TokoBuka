<template>
        <div v-if="product.stock > 0" class="card mt-4 ml-3 rounded shadow" style=" width: 14rem;">
            <img class="card-img-top img-fluid rounded card-image-sizing" :src="product.image_url" alt="Card image">
            <div class="card-body">
                <h6 class="card-title"> {{ product.name }} </h6>
                <p class="card-text mt-0" style="font-size: 14px;">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                    Stock {{ product.stock }} pcs<br>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tags-fill mt-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 7.586 1H3zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        <path d="M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                    </svg>
                    Rp. {{ product.price }}<br><br>
                </p>
                <button @click="addToCart" type="button" class="btn btn-outline-primary btn-block rounded btn-sm bottom-page">Add to cart!</button>
            </div>
        </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['product'],
  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', this.product.id)
    }
  }
}
</script>

<style>
.card-image-sizing {
    height: 200px;
    object-fit: cover;
}
.bottom-page {
    justify-content: center;
    position:absolute;
    bottom: 5px;
    width: 180px;
}
</style>
