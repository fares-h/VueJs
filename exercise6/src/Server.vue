<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(server,index) in 5">
            Server #{{ index+1 }}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Server"
    }
</script>

<style scoped>

</style>