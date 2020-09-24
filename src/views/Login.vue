<template>
    <section class="container">
        <div class="row justify-content-center mt-3">
            <div class="shadow p-4 mb-5 bg-white rounde">
                <center>
                    <img src="../assets/ecom.png" alt="logo" class="img-fluid" width="230px"><br>
                    <h5><b>Login First!</b></h5><br>
                </center>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address:</label>
                        <input 
                            v-model="email"
                            type="email" 
                            class="form-control" 
                            id="login-email" 
                            aria-describedby="emailHelp"
                            placeholder="Input your email here..">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password:</label>
                        <input 
                            v-model="password"
                            type="password" 
                            class="form-control" 
                            id="login-password" 
                            placeholder="Input your password here..">
                    </div>
                    <div class="col text-center mt-4">
                        <button type="submit" class="btn btn-primary btn-block rounded"
                        style="align-content: center;">Login</button>
                    </div>
                </form>
                <form>
                    <div class="col text-center mt-3">
                      Don't have an account?<a @click.prevent="toRegister" href="#"> Register here</a>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        toRegister () {
            this.$router.push({ name: 'Register'})
        },
        login () {
            const payload = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login', payload)
        }
    }
}
</script>

<style>

</style>