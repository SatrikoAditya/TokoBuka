<template>
    <div>
        <Navbar />
        <nav class="navbar nav-heigth navbar-white bg-white justify-content-between">
            <h2><b>History</b></h2>
            <button @click="clearHistory" type="button" class="btn btn-outline-danger rounded mt-3 mb-5 mr-3">Clear History</button>
        </nav>
        <div class="container mt-5">
            <ul class="list-unstyled">
                <HistoryList v-for="riwayat in history" :key="riwayat.id" :riwayat="riwayat" />
            </ul>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import HistoryList from '../components/HistoryList'

export default {
    name: 'History',
    components: {
        Navbar,
        HistoryList
    },
    computed: {
        history () {
            return this.$store.state.history
        }
    },
    methods: {
        fetchHistory () {
            this.$store.dispatch('history')
        },
        clearHistory () {
            this.$store.dispatch('clearHistory')
        }
    },
    created () {
        this.fetchHistory()
    }
}
</script>

<style>
.nav-heigth { 
  height: 80px;
}
</style>