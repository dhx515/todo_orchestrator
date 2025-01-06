/**
 * @file IBatchDeleteLoadUseCase.js
 * @description Interface of Done Data Batch Delete Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import IDoneBatchDeleteProcessor from '../../processor/delete/batch/IDoneBatchDeleteProcessor';
import IDoneDataTransporter from '../../transporter/data/IDoneDataTransporter';


/** @interface */
export default class IBatchDeleteLoadUseCase extends IUseCase {
    deleteProcessor = null;
    dataTransporter = null;
    
    constructor(deleteProcessor, dataTransporter) {
        super();

        this.#validateDoneBatchDeleteProcessor(deleteProcessor);
        this.#validateDoneDataTransporter(dataTransporter);

        this.deleteProcessor = deleteProcessor;
        this.dataTransporter = dataTransporter;
    }

    /**
     * Validates the delete processor object.
     * @param {IDoneBatchDeleteProcessor} target - The delete processor instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneBatchDeleteProcessor.
     */
    #validateDoneBatchDeleteProcessor(target) {
        if (!(target instanceof IDoneBatchDeleteProcessor)) {
            throw new Error('Invalid Done processor object');
        }
    }

    /**
     * Validates the data transporter object.
     * @param {IDoneDataTransporter} target - The data transporter instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneDataTransporter.
     */
    #validateDoneDataTransporter(target) {
        if (!(target instanceof IDoneDataTransporter)) {
            throw new Error('Invalid Done transporter object');
        }
    }

    /**
     * Executes the use case logic for this UseCase.
     * 
     * @abstract
     * @param {string[]} param
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param) {
        throw new Error('Method not implemented');
    }
}