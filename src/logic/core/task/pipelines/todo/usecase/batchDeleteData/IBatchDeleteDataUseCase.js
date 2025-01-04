/**
 * @file IBatchDeleteDataUseCase.js
 * @description Interface of Todo Batch Delete Data Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ITodoBatchDeleteProcessor from '../../processor/delete/batch/ITodoBatchDeleteProcessor';


/** @interface */
export default class IBatchDeleteDataUseCase extends IUseCase {
    aBatchDeleteProcessor = null;
    
    constructor(aBatchDeleteProcessor) {
        super();

        this.#validateTodoBatchDeleteProcessor(aBatchDeleteProcessor);

        this.aBatchDeleteProcessor = aBatchDeleteProcessor;
    }

    /**
     * Validates the delete processor object.
     * @param {ITodoBatchDeleteProcessor} target - The delete processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ITodoBatchDeleteProcessor.
     */
    #validateTodoBatchDeleteProcessor(target) {
        if (!(target instanceof ITodoBatchDeleteProcessor)) {
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