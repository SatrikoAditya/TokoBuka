<template>
    <li class="media bg-white rounded d-flex">
        <img class="mr-3" :src="cart.Product.image_url" alt="product" width="80px">
        <div class="media-body">
            <h5 class="mt-0"> {{cart.Product.name}} </h5>
            <h6>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tags-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 7.586 1H3zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                </svg>
                Rp. {{cart.Product.price}}
            </h6>
            <a @click.prevent="deleteCart" class="btn btn-outline-danger btn-sm rounded " style="float: right;" role="button" href="#" v-b-tooltip.hover title="Delete" placement="bottom">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </a>
            <a @click.prevent="plusOne" class="btn btn-link btn-sm rounded " style="float: right; color: black; margin-right: 10px;" role="button" href="#" v-b-tooltip.hover title="Plus one" placement="bottom">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </a>
            <p style="margin-right: 5px; float: right;"> {{cart.total}} </p>
            <a @click.prevent="minOne" class="btn btn-link btn-sm rounded " style="float: right; color: black; margin-right: 5px;" role="button" href="#" v-b-tooltip.hover title="Minus one" placement="bottom">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>                              
            </a>
        </div>
    </li>
</template>

<script>
export default {
    name: 'CartList',
    props: ['cart'],
    methods: {
        plusOne () {
            this.$store.dispatch('plusOne', this.cart.Product.id)
        },
        minOne () {
            this.$store.dispatch('minOne', this.cart.Product.id)
        },
        deleteCart () {
            this.$store.dispatch('deleteCart', this.cart.Product.id)
        }
    }
}
</script>

<style>

</style>