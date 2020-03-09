const app = new Vue({

    el:'.container',
    data: {
        titulo:'Teste front end',

        name:'',
        age:'',
        date:'',
        users:[]


    },

    methods: {
        addUser: function (e){
            e.preventDefault();
            this.users.push({
                name:this.name,
                age:this.age,
                date:this.date
            })
            localStorage.setItem('users',JSON.stringify(this.users));
            this.name = '';
            this.age = '';
            this.date = '';
        },
        deleteUser: function (index){
            this.users.splice(index,1);
            localStorage.setItem('users',JSON.stringify(this.users));
        }
    },
    created: function(){
        let dadosDB = JSON.parse(localStorage.getItem('users'));
        if (dadosDB == null ){
            this.users = [];
        } else {
            this.users = dadosDB;
        }
    }

})