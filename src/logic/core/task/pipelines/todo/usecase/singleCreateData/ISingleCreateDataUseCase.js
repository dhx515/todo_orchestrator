/**
 * @file ISingleCreateDataUseCase.js
 * @description Interface of Todo Single Create Data Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ITodoSingleCreateProcessor from '../../processor/create/single/ITodoSingleCreateProcessor';


/** @interface */
export default class ICreateDataUseCase extends IUseCase {
    createProcessor = null;
    
    constructor(createProcessor) {
        super();

        this.#validateTodoSingleCreateProcessor(createProcessor);

        this.createProcessor = createProcessor;
    }

    /**
     * Validates the create processor object.
     * @param {ITodoSingleCreateProcessor} target - The create processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ITodoSingleCreateProcessor.
     */
    #validateTodoSingleCreateProcessor(target) {
        if (!(target instanceof ITodoSingleCreateProcessor)) {
            throw new Error('Invalid todo processor object');
        }
    }

    /**
     * Executes the use case logic for this UseCase.
     * 
     * @abstract
     * @param {string} param - The parameter for the use case.
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param) {
        throw new Error('Method not implemented');
    }
}