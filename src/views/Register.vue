<template>
    <section id="login-page" class="container" style="margin-top: 20px; margin-right:180px;">
        <div class="float-right">
            <div class="shadow p-4 rounded">
                <img src="../assets/ecom.png" class="img-fluid" width="200px"><br><br>
                <h5><center><b>Register Now!</b></center></h5>
                <form @submit.prevent="register">
                  <div class="form-group"><br>
                    <label for="exampleInputEmail1">Email address:</label>
                    <input v-model="email" type="email" class="form-control" id="email-user" aria-describedby="emailHelp" placeholder="Input your email here..">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password:</label>
                    <input v-model="password" type="password" class="form-control" id="password-user" placeholder="Input your password here..">
                  </div>
                  <div class="col text-center">
                      <button type="submit" class="btn btn-success btn-block rounded" style="align-content: center; margin-top: 25px;">Submit</button>
                  </div>
                </form>
            </div>
        </div>
        <div class="float-left" style="margin-left: 200px; margin-top: 100px;">
            <img src="../assets/admin.png" alt="ecom_png" width="400px">
        </div>
    </section>
</template>

<script>
export default {
    name: 'Register',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        register () {
            const payload = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('register', payload)
        }
    }
}
</script>

<style>

</style>