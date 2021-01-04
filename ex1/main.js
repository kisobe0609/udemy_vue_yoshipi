var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!!',
        ok: true,
        url: 'https://google.com/'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('');
        },
        sayHi: function() {
            this.message = 'Hello world!';
            return 'Hi!';
        }
    }
});