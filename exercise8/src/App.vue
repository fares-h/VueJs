<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectComponent('blue')" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectComponent('green')" class="btn btn-success">Load Green Template</button>
                <button @click="selectComponent('red')" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="componentSelected">
                    <p>HI I'M CONTENT</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data () {
            return {
                componentSelected: 'appRed'
            }
        },
        methods: {
            selectComponent: function (color) {
                if(color === 'blue')
                    this.componentSelected = 'appBlue';
                if(color === 'green')
                    this.componentSelected = 'appGreen';
                if(color === 'red')
                    this.componentSelected = 'appRed';
            }
        }
    }
</script>

<style>
</style>
