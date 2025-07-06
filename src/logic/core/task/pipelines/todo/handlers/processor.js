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
        dataStorage.setTodo(singleCreateTodoData(param));
    } catch (error) {
        return new Error(`Error creating Todo Data: ${error.message}`);
    }
};

export async function batchCreateTodo(dataStorage, param) {
    try {
        dataStorage.setTodo(batchCreateTodoData(param));
    } catch (error) {
        return new Error(`Error creating Todo Data: ${error.message}`);
    }
};

export async function singleDeleteTodo(dataStorage, param) {
    try {
        dataStorage.setTodo(singleDeleteTodoData(param));
    } catch (error) {
        return new Error(`Error deleting Todo Data: ${error.message}`);
    }
};

export async function batchDeleteTodo(dataStorage, param) {
    try {
        dataStorage.setTodo(batchDeleteTodoData(param));
    } catch (error) {
        return new Error(`Error deleting Todo Data: ${error.message}`);
    }
}