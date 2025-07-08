

export async function inspectEmpty(state) {
    const cancelList = state.value;

    if (cancelList === null || 
        !Array.isArray(cancelList) || 
        Array.isArray(cancelList) && cancelList.length === 0) {
        return true;
    }
    return false;
};

export async function inspectInitialized(state) {
    const isEmpty = await inspectEmpty(state);
    return !isEmpty;
};