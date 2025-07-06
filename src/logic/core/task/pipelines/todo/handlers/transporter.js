
export async function transportTodo(dataStorage) {
    const uiRenderData = dataStorage.getTodoList();
    return uiRenderData;
};