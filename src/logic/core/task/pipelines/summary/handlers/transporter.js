
export async function transportSummary(dataStorage) {
    const uiRenderData = dataStorage.getSummary();
    return uiRenderData;
};