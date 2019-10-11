new Vue ({
    el : '#app',
    data : {
        attachRed : false,
        attachGreen : false,
        attachBlue : false,
        color : "",
        width : 0,
        x : 0,
        y : 0,
    },
    computed : {
        divClasses : function () {
            return {
                green : this.attachGreen , blue : !this.attachBlue
            }
        },
        myStyle : function () {
            return {
                backgroundColor : this.color,
                width : this.x + 'px',
                height : this.y + 'px'

            }
        },
    },
    methods : {
        updateCoordinates : function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
    }
});