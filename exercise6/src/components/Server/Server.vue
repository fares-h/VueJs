<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="(server,index) in 5">
                {{ serverName}} #{{ index+1 }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Server",
        data: function () {
            return {
                serverName: 'Server'
            }
        }
    }
</script>

<style scoped>

</style>