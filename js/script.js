const { createApp } = Vue;

createApp({
    data(){
        return{
            todolist: [
                'Fare la spesa',
                'Portare a spasso il cane',
                'Preparare la cena',
                'Riparare il Frigo',
                'Fare la spesa',
                'Fare la spesa',
                'Fare la spesa',
            ]
        }
    }
}).mount('#app');