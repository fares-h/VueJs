<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{server.id}} and status is: {{ server.status }}</p>
        <button @click="changeToNormal">Change to Normal</button>
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
        },
        methods: {
            changeToNormal() {
                //serverBus.$emit('changeToNormal', this.server.id);
                this.server.status = 'Normal'; // it is the same as $emit but here we can do like that cuz server is object and we deal with the Object it self not with copy
            }
        }
    }
</script>

<style scoped>
    /* without scoped will applied in all elements */
    div {
        border: 1px solid red;
    }
</style>