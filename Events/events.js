new Vue ({
    /**
     * Connect to DOM
     */
    el: '#events',

    /**
     * Store Data to be used
     */
    data : {
        counter : 0,
        x : 0,
        y : 0,
        value : '',
        secondCounter : 0
    },

    /**
     * Dependent Properties
     */
    computed : {
        /**
         * will not be called every time you make something in the html
         * It will be called only when you make changes inside it
         * @returns {string}
         */
        output : function () {
            console.log("Computed");
            return this.counter >= 10 ? 'Greater than 10' : 'Smaller then 10'
        }
    },

    /**
     * Execute code upon data changes,
     * it means all functions inside, will be called every time you changed the data.
     */
    watch : {
        counter : function(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000)
        }
    },

    /**
     * Methods of this Vue Instance, which it will be called every time you call it,
     * even if nothing has changed
     */
    methods : {
        increase : function (step, event) {
            this.counter += step;
            this.x = event.clientX;
            this.y = event.clientY;
        },
        updateCoordinates : function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        deadSpot : function () {

            event.stopPropagation();
        },
        alertMe : function () {
            alert("alert");
        },
        result : function () {
            console.log("Method");
            return this.counter >= 10 ? 'Greater than 10' : 'Smaller then 10'
        }
    }
});