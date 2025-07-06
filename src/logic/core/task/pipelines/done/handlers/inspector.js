

export async function inspectEmpty(dataStorage) {
    const doneList = dataStorage.getDoneList();

    if (doneList === null || !Array.isArray(doneList)) {
        return true;
    }
    return false;
};

export async function inspectInitialized(dataStorage) {
    const doneList = dataStorage.getDoneList();

    if (doneList === null || !Array.isArray(doneList)) {
        return false;
    }
    return true;
};