<template>
    <div class="bodyContainer">
        <div class="form-group">
            <label >Quote</label>
            <textarea class="form-control" ref="textArea"  rows="3" ></textarea>
        </div>
        <button type="button" class="btn btn-primary" @click="addQuote">Add Quote</button>
        <app-quotes :quoteText="quoteText"></app-quotes>

    </div>
</template>

<script>
    import Quotes from './Quotes';
    import { quoteBus } from '../main';
    export default {
        name: "Body",
        data() {
            return {
                quoteText: '',
            }
        },
        components: {
            appQuotes: Quotes
        },
        methods: {
            addQuote () {
                this.quoteText = this.$refs.textArea.value;
                this.$refs.textArea.value = '';
                quoteBus.$emit('quoteAdded')
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