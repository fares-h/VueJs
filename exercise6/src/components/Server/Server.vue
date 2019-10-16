<template>
    <li class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected">
        <p>Server #{{ server.id }} </p>
    </li>
</template>

<script>
    import { serverBus } from '../../main';

    export default {
        name: "Server",
        props: {
            server: {

            }
        },
        methods: {
            serverSelected() {
                serverBus.$emit('serverSelected', this.server)
            }
        }
    }
</script>

<style scoped>

</style>