<template>
    <div>
        <slot></slot>
        <h2>
            Hello from green DIV
        </h2>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>