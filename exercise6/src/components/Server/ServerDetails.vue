<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <button @click="resetToNormal">Reset all Servers to Normal</button>
    </div>
</template>

<script>
    import { eventBus } from '../../main';
    export default {
        name: "ServerDetails",
        methods: {
            resetToNormal() {
                eventBus.$emit('resetToNormal', 'Normal')
            }
        }
    }
</script>

<style scoped>
    /* without scoped will applied in all elements */
    div {
        border: 1px solid red;
    }
</style>