new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods : {
        alertMe : function () {
            alert("Button has been clicked!")
        },
        storeValue : function () {
            this.value = event.target.value;
        }
    }

});