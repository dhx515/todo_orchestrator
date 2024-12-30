/**
 * @file ICreateDataUseCase.js
 * @description Interface of Todo Create Data Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ITodoCreateProcessor from '../../processor/create/ITodoCreateProcessor';


/** @interface */
export default class ICreateDataUseCase extends IUseCase {
    createProcessor = null;
    
    constructor(createProcessor) {
        super();

        this.#validateTodoCreateProcessor(createProcessor);

        this.createProcessor = createProcessor;
    }

    /**
     * Validates the create processor object.
     * @param {ITodoCreateProcessor} target - The create processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ITodoCreateProcessor.
     */
    #validateTodoCreateProcessor(target) {
        if (!(target instanceof ITodoCreateProcessor)) {
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