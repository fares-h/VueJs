<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
           <server></server>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from '../../main';
    import Server from './Server'
    export default {
        name: "Server",
        data: function () {
            return {
                servers: [
                    {id: 1 , status: 'Normal'},
                    {id: 2 , status: 'Critical'},
                    {id: 3 , status: 'Unknown'},
                    {id: 4 , status: 'Normal'}
                ]
            }
        },
        components: {
            Server
        },
        created() {
            eventBus.$on('resetToNormal', (normal) => {

                for(var i=0; i< this.servers.length; i++) {
                    this.servers[i].status = normal;
                }
            })
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>