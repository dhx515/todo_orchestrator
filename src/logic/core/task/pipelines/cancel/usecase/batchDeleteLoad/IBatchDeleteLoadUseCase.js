/**
 * @file IBatchDeleteLoadUseCase.js
 * @description Interface of Cancel Data Batch Delete Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ICancelBatchDeleteProcessor from '../../processor/delete/batch/ICancelBatchDeleteProcessor';
import ICancelDataTransporter from '../../transporter/data/ICancelDataTransporter';


/** @interface */
export default class IBatchDeleteLoadUseCase extends IUseCase {
    aBatchDeleteProcessor = null;
    aDataTransporter = null;
    
    constructor(aBatchDeleteProcessor, aDataTransporter) {
        super();

        this.#validateCancelBatchDeleteProcessor(aBatchDeleteProcessor);
        this.#validateCancelDataTransporter(aDataTransporter);

        this.aBatchDeleteProcessor = aBatchDeleteProcessor;
        this.aDataTransporter = aDataTransporter;
    }

    /**
     * Validates the delete processor object.
     * @param {ICancelBatchDeleteProcessor} target - The delete processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ICancelBatchDeleteProcessor.
     */
    #validateCancelBatchDeleteProcessor(target) {
        if (!(target instanceof ICancelBatchDeleteProcessor)) {
            throw new Error('Invalid Cancel processor object');
        }
    }

    /**
     * Validates the data transporter object.
     * @param {ICancelDataTransporter} target - The data transporter instance to validate.
     * @throws Will throw an error if the target is not an instance of ICancelDataTransporter.
     */
    #validateCancelDataTransporter(target) {
        if (!(target instanceof ICancelDataTransporter)) {
            throw new Error('Invalid Cancel transporter object');
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