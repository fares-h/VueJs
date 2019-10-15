var cmp = {
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
};


new Vue({
    el: '#app',
    components: {
        'my-cmp': cmp
    }
});

new Vue({
   el: '#app2',
    components: {
       'new-cmp': cmp
    }
});