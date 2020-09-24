<template>
    <nav class="navbar navbar-expand-lg sticky-top bg-white">
        <img style="cursor: pointer;" @click.prevent="toHome" src="../assets/ecom.png" width="50px">
        <h3 @click.prevent="toHome" style="cursor: pointer;" class="ml-2 mt-2">TokoBuka</h3>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div v-if="email" class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-4 pt-1">
                <a @click.prevent="toCart" href="#" style="color: black;" v-b-tooltip.hover title="Your Cart" placement="bottom">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                </a>
            </li>
            <li class="nav-item mr-4 pt-2">
                <a @click.prevent="toHistory" href="#" style="color: black;" v-b-tooltip.hover title="Your Shopping History" placement="bottom">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-clock-history" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                        <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                        <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </a>
            </li>
            <li class="nav-item mr-4 pt-2">
                <h5 style="font-size: 20px;" v-b-tooltip.hover title="Your Email" placement="bottom"> {{email}} </h5>
            </li>
            <li class="nav-item mr-3 pt-1">
                <a @click.prevent="logout" class="btn btn-outline-danger btn-sm rounded" role="button" href="#">
                    Logout
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right pt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </a>
            </li>
          </ul>
        </div>

        <div v-else-if="!email" class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-3 pt-1">
                <a @click.prevent="toLogin" class="btn btn-outline-success btn-sm rounded" role="button" href="#">
                    Login Now!
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right pt-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </a>
            </li>
          </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {
            email: localStorage.email
        }
    },
    methods: {
        toCart () {
            this.$router.push({ name: 'Cart' })
            console.log(this.email)
        },
        toHome () {
            this.$router.push({ name: 'Home' })
        },
        logout () {
            this.$store.dispatch('logout')
        },
        toHistory () {
            this.$router.push({ name: 'History' })
        },
        toLogin () {
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>

<style>

</style>