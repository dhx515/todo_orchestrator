import { 
    fetchTodoData, 
    singleCreateTodoData, 
    batchCreateTodoData, 
    singleDeleteTodoData, 
    batchDeleteTodoData 
} from '@/logic/api/todo/api';


export async function fetchTodo(state, param) {
    const todoList = await fetchTodoData(param) || [];
    
    state.value = todoList;
};

export async function singleCreateTodo(state, param) {
    try {
        const todoList = await singleCreateTodoData(param);
        state.value = [...todoList];
    } catch (error) {
        return new Error(`Error creating Todo Data: ${error.message}`);
    }
};

export async function batchCreateTodo(state, param) {
    try {
        const todoList = await batchCreateTodoData(param);
        state.value = [...todoList];
    } catch (error) {
        return new Error(`Error creating Todo Data: ${error.message}`);
    }
};

export async function singleDeleteTodo(state, param) {
    try {
        const todoList = await singleDeleteTodoData(param);
        state.value = [...todoList];
    } catch (error) {
        return new Error(`Error deleting Todo Data: ${error.message}`);
    }
};

export async function batchDeleteTodo(state, param) {
    try {
        const todoList = await batchDeleteTodoData(param);
        state.value = [...todoList];
    } catch (error) {
        return new Error(`Error deleting Todo Data: ${error.message}`);
    }
}