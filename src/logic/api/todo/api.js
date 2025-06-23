import { getTodo, addTodo, addTodos, deleteTodo, deleteTodos } from '../mock/todoWAS';


export async function fetchTodoData(param) {
    return await getTodo(param);
}

export async function singleCreateTodoData(param) {
    return addTodo(param);
}

export async function batchCreateTodoData(param) {
    return addTodos(param);
}

export async function singleDeleteTodoData(param) {
    return deleteTodo(param);
}

export async function batchDeleteTodoData(param) {
    return deleteTodos(param);
}