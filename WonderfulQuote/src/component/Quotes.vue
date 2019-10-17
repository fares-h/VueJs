<template>
    <div >
        <quote :quoteText="quoteText" ></quote>
    </div>

</template>

<script>
    import Quote from './Quote'
    export default {
        name: "Quotes",
        components: {
            Quote
        },
        props:['quoteText'],
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>