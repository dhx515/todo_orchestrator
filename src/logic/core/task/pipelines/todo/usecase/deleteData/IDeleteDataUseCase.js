/**
 * @file IDeleteDataUseCase.js
 * @description Interface of Todo Delete Data Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ITodoDeleteProcessor from '../../processor/delete/ITodoDeleteProcessor';


/** @interface */
export default class IDeleteDataUseCase extends IUseCase {
    deleteProcessor = null;
    
    constructor(deleteProcessor) {
        super();

        this.#validateTodoDeleteProcessor(deleteProcessor);

        this.deleteProcessor = deleteProcessor;
    }

    /**
     * Validates the delete processor object.
     * @param {ITodoDeleteProcessor} target - The delete processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ITodoDeleteProcessor.
     */
    #validateTodoDeleteProcessor(target) {
        if (!(target instanceof ITodoDeleteProcessor)) {
            throw new Error('Invalid todo processor object');
        }
    }

    /**
     * Executes the use case logic for this UseCase.
     * 
     * @abstract
     * @param {string} param
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param) {
        throw new Error('Method not implemented');
    }
}