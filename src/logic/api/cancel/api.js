import { getCancel, addCancel, addCancels, deleteCancel, deleteCancels } from '../mock/cancelWAS';


export async function fetchCancelData(param) {
    return getCancel(param);
}

export async function singleCreateCancelData(param) {
    return addCancel(param);
}

export async function batchCreateCancelData(param) {
    return addCancels(param);
}

export async function singleDeleteCancelData(param) {
    return deleteCancel(param);
}

export async function batchDeleteCancelData(param) {
    return deleteCancels(param);
}