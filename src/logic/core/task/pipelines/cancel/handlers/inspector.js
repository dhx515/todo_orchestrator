

export async function inspectEmpty(dataStorage) {
    const cancelList = dataStorage.getCancelList();

    if (cancelList === null || !Array.isArray(cancelList)) {
        return true;
    }
    return false;
};

export async function inspectInitialized(dataStorage) {
    const cancelList = dataStorage.getCancelList();

    if (cancelList === null || !Array.isArray(cancelList)) {
        return false;
    }
    return true;
};