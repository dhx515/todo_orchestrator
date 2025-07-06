
export async function transportDone(dataStorage) {
    const uiRenderData = dataStorage.getDoneList();
    return uiRenderData;
};