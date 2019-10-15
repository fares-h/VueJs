<template>
    <div class="row">
        <server></server>
        <server-details></server-details>
    </div>
</template>

<script>
    import Server from '../Server/Server.vue';
    import ServerDetails from '../Server/ServerDetails.vue';
    export default {
        name: "Body",
        components: {
            Server,
            ServerDetails // its equal to 'server-details': ServerDetails
        }
    }
</script>

<style scoped>

</style>