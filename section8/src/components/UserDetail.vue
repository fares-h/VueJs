<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ switchName() }}</p>
        <p>User Name: {{userName}}</p>
        <p>Age: {{age}}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    export default {
        props: {
            myName: [String, Array],
            userName: {
                type: String,
                required: true
            },
            age: {
                default: 20
            }
        },
        methods: {
             switchName() {
                 return this.myName.split("").reverse().join("");
             },
            resetName() {
                 this.myName = 'Max';
                 this.$emit('nameWasReset', this.myName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
