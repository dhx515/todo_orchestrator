import { 
    fetchCancelData,
    singleCreateCancelData,
    batchCreateCancelData,
    singleDeleteCancelData,
    batchDeleteCancelData
} from '@/logic/api/cancel/api';


export async function fetchCancel(state, param) {
    const cancelList = await fetchCancelData(param) || [];
    
    state.value = cancelList;
}

export async function singleCreateCancel(state, param) {
    try {
        const cancelList = await singleCreateCancelData(param)
        state.value = cancelList;
    } catch (error) {
        return new Error(`Error creating Cancel Data: ${error.message}`);
    }
}

export async function batchCreateCancel(state, param) {
    try {
        const cancelList = await batchCreateCancelData(param);
        state.value = cancelList;
    } catch (error) {
        return new Error(`Error creating Cancel Data: ${error.message}`);
    }
}

export async function singleDeleteCancel(state, param) {
    try {
        const cancelList = await singleDeleteCancelData(param);
        state.value = cancelList;
    } catch (error) {
        return new Error(`Error deleting Cancel Data: ${error.message}`);
    }
}

export async function batchDeleteCancel(state, param) {
    try {
        const cancelList = await batchDeleteCancelData(param);
        state.value = cancelList;
    } catch (error) {
        return new Error(`Error deleting Cancel Data: ${error.message}`);
    }
}