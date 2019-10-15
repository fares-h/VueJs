
Vue.component('new-component', {
   template: '<h1>New Template created here!</h1>'
});


var data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

var vm1 = new Vue({
  data: data ,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      //this.$refs.myButton.innerText='test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});
vm1.$mount('#app1');


console.log(vm1);
vm1.$refs.headingg.innerText= 'Title from refs';
setTimeout(function () {
    vm1.title = 'changed by the timer';
    vm1.show();
},3000);



var vm2 = new Vue({
   el: '#app2',
   data: {
       title: 'Title1 from vm2 '+ vm1.title,
   }
});


var vm3 = new Vue({
   template : '<h1> Hello from vm3!</h1>'
});
vm3.$mount('#app3');

var vm4 = new Vue({
    template : '<h1> Hello from vm4!</h1>'
});
//vm4.$mount('#app4');
//document.getElementById('app4').appendChild(vm4.$el);

var vm5 = new Vue({
   el: '#app5',
   data: {
        title: 'Hello from vm5 '
   },
    beforeCreate: function () {
        console.log('BeforeCreate()');
    },
    created: function () {
        console.log('Created()');
    },
    beforeMount: function () {
        console.log('beforeMount()');
    },
    mounted: function () {
        console.log('mounted()');
    },
    beforeUpdate: function () {
        console.log('beforeUpdate()');
    },
    updated: function () {
        console.log('updated()');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy()');
    },
    destroyed: function () {
        console.log('destroy()');
    },
    methods: {
       destroy: function () {
           this.$destroy();
       }
    }

});