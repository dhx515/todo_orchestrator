/**
 * @file IDoneTransporter.js
 * @description Interface of Done Data Transporter
 */
import ITransporter from '../../../../../../shared/interfaces/ITransporter';


/** @interface */
export default class IDoneDataTransporter extends ITransporter {
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