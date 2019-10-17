<template>
    <div class="quotesHeader">
        <h2>Quotes Added</h2>
        <div class="progress">
            <div class="progress-bar" role="progressbar" :style="progressBarStyle"> {{ numOfQuotes }}/10</div>
        </div>
    </div>
</template>

<script>
    import {quoteBus} from '../main';

    export default {
        name: "Header",
        created() {
            quoteBus.$on('quoteAdded', () => {
                this.addOneQuote();
            });
            quoteBus.$on('quoteDeleted', () => {
                this.deleteOneQuote();
            });
        },
        data() {
            return {
                progressBarStyle: {
                    width: '0%',
                },
                numOfQuotes: 0
            }
        },
        methods: {
            addOneQuote() {
                this.numOfQuotes++;
            },
            deleteOneQuote(){
                this.numOfQuotes--;
            }
        },
        watch: {
            numOfQuotes(event) {
                this.progressBarStyle.width = this.numOfQuotes + '0%';
            }
        }
    }
</script>

<style scoped>
    .quotesHeader {
        margin: 5% auto;
    }

    .progress {
        margin: auto;
        text-align: center;
    }
</style>