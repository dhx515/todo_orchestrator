import { 
    fetchDoneData,
    singleCreateDoneData,
    batchCreateDoneData,
    singleDeleteDoneData,
    batchDeleteDoneData
} from '@/logic/api/done/api';


export async function fetchDone(state, param) {
    const doneList = await fetchDoneData(param) || [];
    
    state.value = doneList;
}

export async function singleCreateDone(state, param) {
    try {
        const doneList = await singleCreateDoneData(param)
        state.value = doneList;
    } catch (error) {
        return new Error(`Error creating Done Data: ${error.message}`);
    }
}

export async function batchCreateDone(state, param) {
    try {
        const doneList = await batchCreateDoneData(param);
        state.value = doneList;
    } catch (error) {
        return new Error(`Error creating Done Data: ${error.message}`);
    }
}

export async function singleDeleteDone(state, param) {
    try {
        const doneList = await singleDeleteDoneData(param);
        state.value = doneList;
    } catch (error) {
        return new Error(`Error deleting Done Data: ${error.message}`);
    }
}

export async function batchDeleteDone(state, param) {
    try {
        const doneList = await batchDeleteDoneData(param);
        state.value = doneList;
    } catch (error) {
        return new Error(`Error deleting Done Data: ${error.message}`);
    }
}