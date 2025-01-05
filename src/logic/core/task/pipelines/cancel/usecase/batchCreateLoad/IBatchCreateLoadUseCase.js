/**
 * @file IBatchCreateLoadUseCase.js
 * @description Interface of Cancel Data Batch Create Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ICancelBatchCreateProcessor from '../../processor/create/batch/ICancelBatchCreateProcessor';
import ICancelDataTransporter from '../../transporter/data/ICancelDataTransporter';


/** @interface */
export default class ICreateLoadUseCase extends IUseCase {
    aBatchCreateProcessor = null;
    aDataTransporter = null;
    
    constructor(aBatchCreateProcessor, aDataTransporter) {
        super();

        this.#validateCancelBatchCreateProcessor(aBatchCreateProcessor);
        this.#validateCancelDataTransporter(aDataTransporter);

        this.aBatchCreateProcessor = aBatchCreateProcessor;
        this.aDataTransporter = aDataTransporter;
    }

    /**
     * Validates the create processor object.
     * @param {ICancelBatchCreateProcessor} target - The create processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ICancelBatchCreateProcessor.
     */
    #validateCancelBatchCreateProcessor(target) {
        if (!(target instanceof ICancelBatchCreateProcessor)) {
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