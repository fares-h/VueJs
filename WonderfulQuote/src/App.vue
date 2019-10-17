<template>
    <div class="container">
        <component :is="appHeader" :numOfQuotes="numOfQuotes"></component>
        <app-body @quoteDeleted="numOfQuotes--">

        </app-body>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import App from "../../vue-cli/src/App";
    import Header from './component/Header';
    import Footer from './component/Footer';
    import Body from './component/Body'
    import {quoteBus} from "./main";
    export default {
        data () {
            return {
                numOfQuotes: 0,
                appHeader: 'appHeader'
            }
        },
        created() {
            quoteBus.$on('quoteAdded', () => {
                this.addOneQuote();
            });
        },
        components: {
            App,
            appHeader : Header,
            appBody : Body,
            appFooter : Footer
        },
        methods: {
            addOneQuote() {
                this.numOfQuotes ++;
            }
        },
        watch: {

        }
    }
</script>

<style>
</style>
