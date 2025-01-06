/**
 * @file IBatchCreateDataUseCase.js
 * @description Interface of Done Data Batch Create Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import IDoneBatchCreateProcessor from '../../processor/create/batch/IDoneBatchCreateProcessor';


/** @interface */
export default class ICreateDataUseCase extends IUseCase {
    createProcessor = null;
    
    constructor(createProcessor) {
        super();

        this.#validateDoneBatchCreateProcessor(createProcessor);

        this.createProcessor = createProcessor;
    }

    /**
     * Validates the create processor object.
     * @param {IDoneBatchCreateProcessor} target - The create processor instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneBatchCreateProcessor.
     */
    #validateDoneBatchCreateProcessor(target) {
        if (!(target instanceof IDoneBatchCreateProcessor)) {
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