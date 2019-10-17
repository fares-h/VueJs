<template>
    <div>
        <slot></slot>
        <h2>
            Hello from red DIV
        </h2>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>