new Vue ({
    el : '#app',
    data : {
        attachRed : false,
        attachGreen : false,
        attachBlue : false,
        color : "green"
    },
    computed : {
        divClasses : function () {
            return {
                green : this.attachGreen , blue : !this.attachBlue
            }
        }
    }
});