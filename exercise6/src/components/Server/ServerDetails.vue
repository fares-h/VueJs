<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{server.id}} and status is: {{ server.status }}</p>
    </div>
</template>

<script>
    import { serverBus } from '../../main';
    export default {
        name: "ServerDetails",
        data() {
            return {
                server: null
            }
        },
        created() {
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            })
        }
    }
</script>

<style scoped>
    /* without scoped will applied in all elements */
    div {
        border: 1px solid red;
    }
</style>