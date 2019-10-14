new Vue({
  el: '#exercise',
  data: {
    effectClasses : {
      highlight : false,
      shrink : true
    },
    myStyle : {
      backgroundColor : 'gray',
      width : '50 px'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    },
    userClass:'',
    userClass2:'',
    isVisible : true
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){

          vm.effectClasses.highlight = !vm.effectClasses.highlight;
          vm.effectClasses.shrink = !vm.effectClasses.shrink;

      }, 1000)
    },
    startProgress : function () {
      var vm = this;
      var width = 0;
      setInterval(function () {
        width += width +10;
        vm.progressBar.width = width +'px';
      },500)
    }
  }
});
