const { createApp } = Vue;

createApp({
    data(){
        return{
            newTask: '',
            todolist: [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Portare a spasso il cane',
                    done: false,
                },
                {
                    text: 'Preparare la cena',
                    done: false,
                },
                {   
                    text: 'Riparare il Frigo',
                    done: false,
                },
                {
                    text: 'Lavare la macchina',
                    done: false,
                },
                {
                    text: 'Fare l\'esercizio di Boolean',
                    done: false,
                }
            ]
        }
    },
    methods: {
        addTask(){
            this.todolist.push(this.newTask);
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
        }
    }
}).mount('#app');