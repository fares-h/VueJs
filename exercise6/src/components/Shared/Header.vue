<template>
    <div class="row">
        <div class="col-xs-12">
            <header>
                <h1>{{ title }}</h1>
            </header>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data: function () {
            return {
                title: 'Server Status'
            }
        }
    }
</script>

<style scoped>

</style>