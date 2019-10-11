new Vue({
   el : '#exercise',
    data : {
       name : 'Hani',
       age : 26,
       url: "https://vuejs.org/images/logo.png"
    },
    methods : {
       getRandomFloat : function() {
           return Math.random();
       }
    }
});