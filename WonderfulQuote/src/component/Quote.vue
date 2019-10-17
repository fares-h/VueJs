<template>
    <div class="col-sm-6 col-md-4 col-lg-3" @click.prevent="deleteQuote(index)">
        <div class="panel panel-default">
            <div class="panel-body quote" >
                <slot ></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import {quoteBus} from "../main";

    export default {
        name: "Quote",
        props:['index'],
        methods: {
            deleteQuote(index) {
                quoteBus.$emit('quoteDeleted', index);
            }
        }

    }
</script>

<style scoped>
    .panel-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #6e6e6e;
    }

    .quote {
        cursor: pointer;
    }
    .quote:hover {
        background-color: #ffe2e2;
    }
</style>