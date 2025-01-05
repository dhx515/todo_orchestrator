/**
 * @file ICancelDataStorage.js
 * @description Interface of Cancel DataStorage
 */
import IDataStorage from '@/logic/shared/interfaces/IDataStorage';


/** @interface */
export default class ICancelDataStorage extends IDataStorage {
    constructor() {
        super();
    }

    /**
     * @returns {string[]} 
     */
    getCancelList() {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string[]} param 
     */
    setCancelList(param) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string[]} param 
     */
    addCancelItemList(param) {
        throw new Error('Method not implemented');
    }

    /**
     * @param {string} param 
     */
    deleteCancelItem(param) {
        throw new Error('Method not implemented');
    }
    
    /**
     * @param {string[]} param 
     */
    deleteCancelItemList(param) {
        throw new Error('Method not implemented');
    }
}