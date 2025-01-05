/**
 * @file ICancelTransporter.js
 * @description Interface of Cancel Data Transporter
 */
import ITransporter from '@/logic/shared/interfaces/ITransporter';


/** @interface */
export default class ICancelDataTransporter extends ITransporter {
    constructor(dataStorage) {
        super(dataStorage);
    }

    /**
     * Executes the transport logic for this data transporter.
     * 
     * @abstract
     * @returns {string[]}
     * @throws {Error} If the method is not implemented in the subclass.
     */
    transport() {
        throw new Error('Method not implemented');
    }
}