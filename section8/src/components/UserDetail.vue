<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Here is also my Name: {{ userName }}</p>
        <p>And my Age: {{ userAge }}</p>
        <button @click="resetNameHere">Reset Name form here </button>
        <button @click="resetNameParent">Reset Name from Parent</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props:{
            userName: {
                type: String,
                required: true
            },
            userAge: {
                type: Number,
                required: true
            },
            resetNameParent: {
                type: Function
            }
        },
        methods: {
            resetNameHere() {
                this.userName = 'Hani';
                this.$emit('userNameReseted', this.userName);
            }
        },
        created () {
            eventBus.$on('ageChanged', (name, age)=> {
                this.userName = name;
                this.userAge = age ;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
