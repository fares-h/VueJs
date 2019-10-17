<template>
    <div class="row">
        <div class="form-group">
            <label >Quote</label>
            <textarea class="form-control" ref="textArea"  rows="3" ></textarea>
        </div>
        <button type="button" class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
        <app-quotes :quotes="quotes"></app-quotes>
    </div>
</template>

<script>
    import Quotes from './Quotes';
    import { quoteBus } from '../main';
    export default {
        name: "Body",
        data() {
            return {
                quotes: [
                    'just one Quote to see'
                ],
                maxQuotes: 10
            }
        },
        components: {
            appQuotes: Quotes
        },
        created() {
            quoteBus.$on('quoteDeleted', (index) => {
                delete (this.quotes[index]);
                alert(this.quotes.length);
            })
        },
        methods: {
            addQuote () {
                if(this.$refs.textArea.value === '' || this.quotes.length > 10) {
                    alert ('Write a Quote')
                } else {
                    this.quotes.push(this.$refs.textArea.value);
                    this.$refs.textArea.value = '';
                    quoteBus.$emit('quoteAdded')
                }

            }
        }
    }
</script>

<style scoped>
    .bodyContainer{
        margin: 3% 20% 0% 20%;
    }
    .btn{
        margin-left: 40%;
    }
</style>