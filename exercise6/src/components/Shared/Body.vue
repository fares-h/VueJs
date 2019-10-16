<template>
    <div class="row">
        <servers></servers>
        <server-details></server-details>
    </div>
</template>

<script>
    import Servers from '../Server/Servers.vue';
    import ServerDetails from '../Server/ServerDetails.vue';
    export default {
        name: "Body",
        components: {
            Servers,
            ServerDetails // its equal to 'server-details': ServerDetails
        }
    }
</script>

<style scoped>

</style>