const { createApp } = Vue;

createApp({
    data(){
        return{
            newTask: '',
            search: '',
            todolist: [
                {
                    text: 'Fare la spesa',
                    done: false,
                    edit: false,
                },
                {
                    text: 'Portare a spasso il cane',
                    done: false,
                    edit: false,
                },
                {
                    text: 'Preparare la cena',
                    done: false,
                    edit: false,
                },
                {   
                    text: 'Riparare il Frigo',
                    done: false,
                    edit: false,
                },
                {
                    text: 'Lavare la macchina',
                    done: false,
                    edit: false,
                },
                {
                    text: 'Fare l\'esercizio di Boolean',
                    done: false,
                    edit: false,
                }
            ]
        }
    },
    computed:{
        searchTask(){

            let filteredTask;
            if(this.search != ''){
                filteredTask = this.todolist.filter((elem) => {
                    return elem.text.toLowerCase().includes(this.search).toLowerCase();
                })
            }else{
                filteredTask = this.todolist;
            }
            
            return filteredTask
        }
        
    },
    methods: {
        addTask(){
            let object = {
                text: this.newTask,
                done: false
            }

            this.todolist.push(object);
            this.newTask = '';
        },
        removeTask(index){
            this.todolist.splice(index, 1);
        },
        checkTask(index){
            let task = this.todolist[index];

            if(task.done == true){
                task.done = false;
            }
            else{
                task.done = true;
            }
        },
        showEdit(index){
            let task = this.todolist[index];

            if(task.edit == true){

                if(task.text == ''){
                    this.removeTask(index);
                }

                task.edit = false;
            }
            else{
                task.edit = true;
            }
        }

    }
}).mount('#app');