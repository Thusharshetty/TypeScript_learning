import axios, { type AxiosResponse } from 'axios';

axios.get('https://api.example.com/data')
.then(response=>{
    console.log(response.data);
}).catch(error=>{
    console.error('Error fetching data:', error);
});

interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchTodo= async()=>{
    try{

        const res:AxiosResponse<Todo>=await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Todo:', res.data);
    }catch(error:any){
        if(axios.isAxiosError(error)){
            console.error('Axios error:', error.message);
            if(error.response){
                console.error('Response data:', error.response.data);
            }
        }
    }
}