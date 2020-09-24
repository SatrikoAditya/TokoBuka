<template>
    <li class="media bg-white rounded d-flex mb-3">
        <img class="mr-3" :src="riwayat.Product.image_url" width="80px" alt="Generic placeholder image">
        <div class="media-body">
            <h5 class="mt-0 mb-1">{{riwayat.Product.name}}</h5>
            total : {{riwayat.total}}<br>
            on {{riwayat.createdAt | moment("dddd, MMMM Do YYYY")}}
        </div>
    </li>
</template>

<script>
export default {
  name: 'HistoryList',
  props: ['riwayat']
}
</script>

<style>

</style>
