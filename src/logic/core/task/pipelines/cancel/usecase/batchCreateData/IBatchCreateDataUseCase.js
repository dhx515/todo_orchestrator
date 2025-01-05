/**
 * @file IBatchCreateDataUseCase.js
 * @description Interface of Cancel Data Batch Create Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ICancelBatchCreateProcessor from '../../processor/create/batch/ICancelBatchCreateProcessor';


/** @interface */
export default class IBatchCreateDataUseCase extends IUseCase {
    aBatchCreateProcessor = null;
    
    constructor(aBatchCreateProcessor) {
        super();

        this.#validateCancelBatchCreateProcessor(aBatchCreateProcessor);

        this.aBatchCreateProcessor = aBatchCreateProcessor;
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