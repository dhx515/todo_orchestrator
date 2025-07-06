import { 
    fetchTodoData, 
    singleCreateTodoData, 
    batchCreateTodoData, 
    singleDeleteTodoData, 
    batchDeleteTodoData 
} from '@/logic/api/todo/api';


export async function fetchTodo(dataStorage, param) {
    const todoList = await fetchTodoData(param) || [];
    
    dataStorage.setTodoList(todoList);
};

export async function singleCreateTodo(dataStorage, param) {
    try {
        const todoList = await singleCreateTodoData(param);
        dataStorage.setTodo(todoList);
    } catch (error) {
        return new Error(`Error creating Todo Data: ${error.message}`);
    }
};

export async function batchCreateTodo(dataStorage, param) {
    try {
        const todoList = await batchCreateTodoData(param);
        dataStorage.setTodo(todoList);
    } catch (error) {
        return new Error(`Error creating Todo Data: ${error.message}`);
    }
};

export async function singleDeleteTodo(dataStorage, param) {
    try {
        const todoList = await singleDeleteTodoData(param);
        dataStorage.setTodo(todoList);
    } catch (error) {
        return new Error(`Error deleting Todo Data: ${error.message}`);
    }
};

export async function batchDeleteTodo(dataStorage, param) {
    try {
        const todoList = await batchDeleteTodoData(param);
        dataStorage.setTodo(todoList);
    } catch (error) {
        return new Error(`Error deleting Todo Data: ${error.message}`);
    }
}