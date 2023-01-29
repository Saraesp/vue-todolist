const { createApp } = Vue;

createApp({
    data(){
        return{
            newTask: '',
            todolist: [
                'Fare la spesa',
                'Portare a spasso il cane',
                'Preparare la cena',
                'Riparare il Frigo',
                'Lavare la macchina',
                'fare l\'esercizio di Boolean',
            ]
        }
    }
}).mount('#app');