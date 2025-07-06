


export async function inspectEmpty(dataStorage) {
    const todoList = dataStorage.getDoneList();

    if (todoList === null || !Array.isArray(todoList)) {
        return true;
    }
    return false;
};

export async function inspectInitialized(dataStorage) {
    const todoList = dataStorage.getDoneList();

    if (todoList === null || !Array.isArray(todoList)) {
        return false;
    }
    return true;
};