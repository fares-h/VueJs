<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <server></server>
        </div>
        <div class="col-xs-12 col-sm-6">
            <p>Server Details are currently not updated</p>
        </div>
    </div>
</template>

<script>
    import Server from './Server.vue'
    export default {
        name: "Body",
        components: {
            'server': Server
        }
    }
</script>

<style scoped>

</style>