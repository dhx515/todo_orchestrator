/**
 * @file IBatchCreateDataUseCase.js
 * @description Interface of Todo Batch Create Data Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ITodoBatchCreateProcessor from '../../processor/create/batch/ITodoBatchCreateProcessor';


/** @interface */
export default class ICreateDataUseCase extends IUseCase {
    aBatchCreateProcessor = null;
    
    constructor(aBatchCreateProcessor) {
        super();

        this.#validateTodoBatchCreateProcessor(aBatchCreateProcessor);

        this.aBatchCreateProcessor = aBatchCreateProcessor;
    }

    /**
     * Validates the create processor object.
     * @param {ITodoBatchCreateProcessor} target - The create processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ITodoBatchCreateProcessor.
     */
    #validateTodoBatchCreateProcessor(target) {
        if (!(target instanceof ITodoBatchCreateProcessor)) {
            throw new Error('Invalid todo processor object');
        }
    }

    /**
     * Executes the use case logic for this UseCase.
     * 
     * @abstract
     * @param {string[]} param - The parameter for the use case.
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param) {
        throw new Error('Method not implemented');
    }
}