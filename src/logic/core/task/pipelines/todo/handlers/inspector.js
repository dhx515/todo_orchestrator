
export async function inspectEmpty(state) {
    const todoList = state.value;

    if (todoList === null || 
        !Array.isArray(todoList) 
        || Array.isArray(todoList) && todoList.length === 0) {
        return true;
    }
    return false;
};

export async function inspectInitialized(state) {
    const isEmpty = await inspectEmpty(state);
    return !isEmpty;
};