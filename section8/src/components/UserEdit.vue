<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Name: {{ userName }}</p>
        <p>My Age: {{ userAge }}</p>
        <input type="number" v-model="userAge" placeholder="Enter your age">
        <input type="text" v-model="userName" placeholder="Enter your Name">
        <button @click="changeAge"> Change Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props: {
            userAge: {
                type: Number,
                required: true
            },
            userName: {
                type: String
            }
        },
        methods: {
            changeAge() {
                //this.userAge = 18;
                //this.$emit();
                eventBus.$emit('ageChanged',this.userName, this.userAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
