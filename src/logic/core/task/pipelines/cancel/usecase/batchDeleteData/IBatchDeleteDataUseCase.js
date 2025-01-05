/**
 * @file IBatchDeleteDataUseCase.js
 * @description Interface of Cancel Data Batch Delete Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ICancelBatchDeleteProcessor from '../../processor/delete/batch/ICancelBatchDeleteProcessor';


/** @interface */
export default class IBatchDeleteDataUseCase extends IUseCase {
    aBatchDeleteProcessor = null;
    
    constructor(aBatchDeleteProcessor) {
        super();

        this.#validateCancelBatchDeleteProcessor(aBatchDeleteProcessor);

        this.aBatchDeleteProcessor = aBatchDeleteProcessor;
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