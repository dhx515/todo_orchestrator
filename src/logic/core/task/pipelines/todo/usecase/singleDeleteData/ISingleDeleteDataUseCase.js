/**
 * @file ISingleDeleteDataUseCase.js
 * @description Interface of Todo Single Delete Data Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ITodoSingleDeleteProcessor from '../../processor/delete/single/ITodoSingleDeleteProcessor';


/** @interface */
export default class ISingleDeleteDataUseCase extends IUseCase {
    deleteProcessor = null;
    
    constructor(deleteProcessor) {
        super();

        this.#validateTodoSingleDeleteProcessor(deleteProcessor);

        this.deleteProcessor = deleteProcessor;
    }

    /**
     * Validates the delete processor object.
     * @param {ITodoSingleDeleteProcessor} target - The delete processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ITodoSingleDeleteProcessor.
     */
    #validateTodoSingleDeleteProcessor(target) {
        if (!(target instanceof ITodoSingleDeleteProcessor)) {
            throw new Error('Invalid todo processor object');
        }
    }

    /**
     * Executes the use case logic for this UseCase.
     * 
     * @abstract
     * @param {string} param - The parameter(s) for the use case.
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param) {
        throw new Error('Method not implemented');
    }
}