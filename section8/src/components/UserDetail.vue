<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ name }}</p>
        <p>User Name: {{userName}}</p>
    </div>
</template>

<script>
    export default {
        props: ['name','userName']
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
