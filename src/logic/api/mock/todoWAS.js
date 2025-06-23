const initialTodo = ['팀업무', '개인업무', '타팀자료요청'];
let todo = [...initialTodo];


// 테스트용: 배열을 초기 상태로 리셋
export async function resetTodoMock() {
    todo = [...initialTodo];
}

export async function getTodo(param) {
    return todo;
}

export async function addTodo(param) {
    todo.push(param);
    return todo;
}

export async function addTodos(param) {
    param.forEach(item => {
        todo.push(item);
    });
    return todo;
}

export async function deleteTodo(param) {
    const index = todo.findIndex(item => item === param);
    if (index !== -1) {
        todo.splice(index, 1);
    }
    return todo;
}

export async function deleteTodos(param) {
    param.forEach(target => {
        const index = todo.findIndex(item => item === target);
        if (index !== -1) {
            todo.splice(index, 1);
        }
    });
    return todo;
}

