/**
 * @file IBatchDeleteDataUseCase.js
 * @description Interface of Done Data Batch Delete Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import IDoneBatchDeleteProcessor from '../../processor/delete/batch/IDoneBatchDeleteProcessor';


/** @interface */
export default class IBatchDeleteDataUseCase extends IUseCase {
    aBatchDeleteProcessor = null;
    
    constructor(aBatchDeleteProcessor) {
        super();

        this.#validateDoneBatchDeleteProcessor(aBatchDeleteProcessor);

        this.aBatchDeleteProcessor = aBatchDeleteProcessor;
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