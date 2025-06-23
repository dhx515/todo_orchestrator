import { getDone, addDone, addDones, deleteDone, deleteDones } from '../mock/doneWAS';


export async function fetchDoneData(param) {
    return getDone(param);
}

export async function singleCreateDoneData(param) {
    return addDone(param);
}

export async function batchCreateDoneData(param) {
    return addDones(param);
}

export async function singleDeleteDoneData(param) {
    return deleteDone(param);
}

export async function batchDeleteDoneData(param) {
    return deleteDones(param);
}