<template>
    <div>
        <Navbar />
        <h2 class="mt-2 ml-4"><b>Cart List</b></h2>
        <div class="row justify-content-center mt-5">
            <div class="col-6">
                <ul class="list-unstyled ml-5" style="overflow-y: auto; height: 480px;">
                    <CartList v-for="cart in carts" :key="cart.id" :cart="cart" />
                </ul>
            </div>
            <div class="col-6">
                <center>
                    <h1>TOTAL PRICE</h1>
                    <h1>Rp. {{totalPrice}}</h1>
                    <button v-if="carts.length !== 0" @click="checkout" type="button" class="btn btn-outline-primary rounded mt-3">Checkout Now!</button>
                </center>
            </div>
        </div>
    </div>
    
</template>

<script>
import Navbar from '../components/Navbar'
import CartList from '../components/CartList'

export default {
    name: 'Cart',
    components: {
        Navbar,
        CartList
    },
    computed: {
        carts () {
            return this.$store.state.carts
        },
        totalPrice () {
            return this.$store.state.totalPrice
        }
    },
    methods: {
        fetchCart () {
            this.$store.dispatch('fetchCart')
        },
        checkout () {
            this.$store.dispatch('checkout')
        }
    },
    created () {
        this.fetchCart()
    }
}
</script>

<style>

</style>