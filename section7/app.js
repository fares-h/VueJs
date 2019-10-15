Vue.component('my-cmp',{
    data: function () {
        return {
            status: 'Critical'
        };
    },
    template: '<p>Server Status: {{ status }} <br> <button @click="changeStatus">Change Me</button></p>',
    methods: {
        changeStatus : function () {
            this.status = 'Normal';
        }
    }
}) ;


new Vue({
    el: '#app'
});