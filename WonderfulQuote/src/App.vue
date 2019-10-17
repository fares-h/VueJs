<template>
    <div class="container">
        <app-header></app-header>
        <app-body></app-body>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import App from "../../vue-cli/src/App";
    import Header from './component/Header';
    import Footer from './component/Footer';
    import Body from './component/Body'
    export default {
        components: {
            App,
            appHeader : Header,
            appBody : Body,
            appFooter : Footer
        }
    }
</script>

<style>
</style>
