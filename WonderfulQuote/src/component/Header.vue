<template>
    <div class="quotesHeader">
        <h2>Quotes Added</h2>
        <div class="progress">
            <div class="progress-bar" role="progressbar" :style="progressBarStyle"> {{ numOfQuotes }}/10</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: ['numOfQuotes'],
        created() {

        },
        data() {
            return {
                progressBarStyle: {
                    width: '0%',
                }
            }
        },
        watch:{
            numOfQuotes (event) {
               this.progressBarStyle.width = this.numOfQuotes +'0%';
            }
        }
    }
</script>

<style scoped>
    .quotesHeader{
        margin: 5% auto;
    }
    .progress {
        margin: auto;
        text-align: center;
    }
</style>