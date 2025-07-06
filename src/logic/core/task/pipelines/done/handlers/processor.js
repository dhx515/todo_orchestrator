import { 
    fetchDoneData,
    singleCreateDoneData,
    batchCreateDoneData,
    singleDeleteDoneData,
    batchDeleteDoneData
} from '@/logic/api/done/api';


export async function fetchDone(dataStorage, param) {
    const doneList = await fetchDoneData(param) || [];
    
    dataStorage.setDoneList(doneList);
}

export async function singleCreateDone(dataStorage, param) {
    try {
        const doneList = await singleCreateDoneData(param)
        dataStorage.setDoneList(doneList);
    } catch (error) {
        return new Error(`Error creating Done Data: ${error.message}`);
    }
}

export async function batchCreateDone(dataStorage, param) {
    try {
        const doneList = await batchCreateDoneData(param);
        dataStorage.setDoneList(doneList);
    } catch (error) {
        return new Error(`Error creating Done Data: ${error.message}`);
    }
}

export async function singleDeleteDone(dataStorage, param) {
    try {
        const doneList = await singleDeleteDoneData(param);
        dataStorage.setDoneList(doneList);
    } catch (error) {
        return new Error(`Error deleting Done Data: ${error.message}`);
    }
}

export async function batchDeleteDone(dataStorage, param) {
    try {
        const doneList = await batchDeleteDoneData(param);
        dataStorage.setDoneList(doneList);
    } catch (error) {
        return new Error(`Error deleting Done Data: ${error.message}`);
    }
}