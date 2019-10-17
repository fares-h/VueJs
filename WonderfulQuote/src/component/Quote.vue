<template>
    <div>
        <p>{{ quoteText }}</p>
    </div>
</template>

<script>
    export default {
        name: "Quote",
        props: {
            quoteText: {
                type: String
            }
        }
    }
</script>

<style scoped>
    div{
        border: 2px solid #ccc;
        margin: 5% auto;
        width: 30%;
        float: left;
        text-align: center;
    }
</style>