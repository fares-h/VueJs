<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ switchName() }}</p>
        <p>User Name: {{userName}}</p>
        <p>Age: {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn">Reset Name from Parent</button>
        <button @click="resetAge">Reset Age</button>

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
            userAge: {
                type: Number,
                default: 20
            },
            resetFn: {
                type: Function
            }
        },
        methods: {
             switchName() {
                 return this.myName.split("").reverse().join("");
             },
            resetName() {
                 this.myName = 'Max';
                 this.$emit('nameWasReset', this.myName);
            },
            resetAge() {
                 this.userAge = 18;
                 this.$emit('ageReseted', this.userAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
