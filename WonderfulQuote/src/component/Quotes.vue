<template>
    <div class="row" >
        <quote  v-for="(quote,index) in quotes" :index="index" >
               <p>{{ quote }}</p>
        </quote>
    </div>
</template>

<script>
    import Quote from './Quote'
    export default {
        name: "Quotes",
        components: {
            Quote
        },
        props: ['quotes'],
    }
</script>

<style scoped>

</style>