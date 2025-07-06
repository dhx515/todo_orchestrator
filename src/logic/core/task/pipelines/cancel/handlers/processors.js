import { 
    fetchCancelData,
    singleCreateCancelData,
    batchCreateCancelData,
    singleDeleteCancelData,
    batchDeleteCancelData
} from '@/logic/api/cancel/api';


export async function fetchCancel(dataStorage, param) {
    const cancelList = await fetchCancelData(param) || [];
    
    dataStorage.setCancelList(cancelList);
}

export async function singleCreateCancel(dataStorage, param) {
    try {
        const cancelList = await singleCreateCancelData(param)
        dataStorage.setCancelList(cancelList);
    } catch (error) {
        return new Error(`Error creating Cancel Data: ${error.message}`);
    }
}

export async function batchCreateCancel(dataStorage, param) {
    try {
        const cancelList = await batchCreateCancelData(param);
        dataStorage.setCancelList(cancelList);
    } catch (error) {
        return new Error(`Error creating Cancel Data: ${error.message}`);
    }
}

export async function singleDeleteCancel(dataStorage, param) {
    try {
        const cancelList = await singleDeleteCancelData(param);
        dataStorage.setCancelList(cancelList);
    } catch (error) {
        return new Error(`Error deleting Cancel Data: ${error.message}`);
    }
}

export async function batchDeleteCancel(dataStorage, param) {
    try {
        const cancelList = await batchDeleteCancelData(param);
        dataStorage.setCancelList(cancelList);
    } catch (error) {
        return new Error(`Error deleting Cancel Data: ${error.message}`);
    }
}