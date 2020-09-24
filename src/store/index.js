import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(Vuex)
Vue.use(VueSweetalert2)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    totalPrice: 0,
    history: []
  },
  mutations: {
    setProduct (state, payload) {
      state.products = payload
    },
    setCart (state, payload) {
      state.carts = payload
    },
    setTotalPrice (state, totalPrice) {
      state.totalPrice = totalPrice
    },
    setHistory (state, payload) {
      state.history = payload
    }
  },
  actions: {
    fetchProduct ({ commit }) {
      axios.get('http://localhost:3000/product/customers')
        .then(({ data }) => {
          console.log(data)
          commit('setProduct', data.data)
        })
        .catch(console.log)
    },
    fetchCart ({ commit }) {
      axios.get('http://localhost:3000/carts', {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          console.log(data.totalPrice)
          commit('setCart', data.product)
          commit('setTotalPrice', data.totalPrice)
        })
    },
    history ({ commit }) {
      axios.get('http://localhost:3000/carts/history', {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          console.log(data.data)
          commit('setHistory', data.data)
        })
    },
    login (context, payload) {
      const { email, password } = payload
      axios.post('http://localhost:3000/customers/login', {
        email, password
      })
        .then(({ data }) => {
          this._vm.$swal.fire({
            icon: 'success',
            title: 'Login Success!',
            showConfirmButton: false,
            timer: 1500
          })
          localStorage.setItem('token', data.token)
          localStorage.setItem('email', data.email)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          this._vm.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.errors[0],
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    register (context, payload) {
      const { email, password } = payload
      axios.post('http://localhost:3000/customers/register', {
        email, password
      })
        .then(({ data }) => {
          this._vm.$swal.fire({
            icon: 'success',
            title: 'Register Success!',
            showConfirmButton: false,
            timer: 1500
          })
          router.push({ name: 'Login' })
        })
        .catch(err => {
          this._vm.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.errors[0],
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    addToCart (context, productId) {
      if (localStorage.token) {
        axios.post(`http://localhost:3000/carts/${productId}`, {
          productId
        }, {
          headers: {
            token: localStorage.token
          }
        })
          .then(({ data }) => {
            this._vm.$swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Add product to cart success!',
              showConfirmButton: false,
              timer: 2000
            })
            context.dispatch('fetchProduct')
          })
          .catch(err => {
            this._vm.$swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.errors[0],
              showConfirmButton: false,
              timer: 1500
            })
          })
      } else {
        this._vm.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please login first to add this product to your cart',
          showConfirmButton: false,
          timer: 2500
        })
        router.push({ name: 'Login' })
      }
    },
    plusOne (context, productId) {
      axios.patch(`http://localhost:3000/carts/plus/${productId}`, {
        productId
      }, {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          this._vm.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.errors[0],
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    checkout (context) {
      axios.patch('http://localhost:3000/carts/checkout', {
        id: 1
      }, {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          this._vm.$swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Checkout Success!',
            showConfirmButton: false,
            timer: 2000
          })
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
          this._vm.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.errors[0],
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    minOne (context, productId) {
      axios.patch(`http://localhost:3000/carts/min/${productId}`, {
        productId
      }, {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          this._vm.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.errors[0],
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    clearHistory (context) {
      axios.delete('http://localhost:3000/carts/history', {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          this._vm.$swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Clear History Success!',
            showConfirmButton: false,
            timer: 2000
          })
          context.dispatch('history')
        })
        .catch(console.log)
    },
    deleteCart (context, productId) {
      this._vm.$swal({
        title: 'Are You Sure Want to Delete This Product at Cart?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://localhost:3000/carts/${productId}`, {
              headers: {
                token: localStorage.token
              }
            })
              .then(({ data }) => {
                this._vm.$swal.fire({
                  toast: true,
                  position: 'top-end',
                  icon: 'success',
                  title: 'Delete Product From Cart Success!',
                  showConfirmButton: false,
                  timer: 2000
                })
                context.dispatch('fetchCart')
              })
              .catch(err => {
                this._vm.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: err.response.data.errors[0],
                  showConfirmButton: false,
                  timer: 1500
                })
              })
          }
        })
    },
    logout () {
      this._vm.$swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'info',
        title: 'Good bye, see you later!',
        showConfirmButton: false,
        timer: 2000
      })
      localStorage.clear()
      router.push({ name: 'Login' })
    }
  },
  modules: {
  }
})
