
export async function inspectEmpty(state) {
    const todoList = state.value;

    if (todoList === null || !Array.isArray(todoList)) {
        return true;
    }
    return false;
};

export async function inspectInitialized(state) {
    const todoList = state.value;

    if (todoList === null || !Array.isArray(todoList)) {
        return false;
    }
    return true;
};