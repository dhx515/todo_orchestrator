import { getTodo } from './todoWAS.js';
import { getDone } from './doneWAS.js';
import { getCancel } from './cancelWAS.js';

export async function getSummary() {    
    const todoList = await getTodo();
    const doneList = await getDone();
    const cancelList = await getCancel();

    const res = {
        Todo: todoList.length,
        Done: doneList.length,
        Cancel: cancelList.length,
    };
    return res;
}