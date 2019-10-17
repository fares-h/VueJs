<template>
    <div>
        <h2>New</h2>
        <button @click="counter++"> Increase </button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        name: "New",
        data () {
            return {
                counter: 0
            }
        },
        deactivated() {
            console.log('Deactivated')
        },
        activated() {
            console.log('Activated')
        }
    }
</script>

<style scoped>

</style>