

export async function inspectEmpty(state) {
    const doneList = state.value;

    if (doneList === null || 
        !Array.isArray(doneList) 
        || Array.isArray(doneList) && doneList.length === 0) {
        return true;
    }
    return false;
};

export async function inspectInitialized(state) {
    const isEmpty = await inspectEmpty(state);
    return !isEmpty;
};