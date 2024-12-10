/**
 * @file ICreateLoadUseCase.js
 * @description Interface of Todo Create Load Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ITodoCreateProcessor from '../../processor/create/ITodoCreateProcessor';
import ITodoDataTransporter from '../../transporter/data/ITodoDataTransporter';


/** @interface */
export default class ICreateLoadUseCase extends IUseCase {
    createProcessor = null;
    dataTransporer = null;
    
    constructor(createProcessor, dataTransporer) {
        super();

        this.#validateTodoCreateProcessor(createProcessor);
        this.#validateTodoDataTransporter(dataTransporer);

        this.createProcessor = createProcessor;
        this.dataTransporer = dataTransporer;
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
     * Validates the data transporter object.
     * @param {ITodoDataTransporter} target - The data transporter instance to validate.
     * @throws Will throw an error if the target is not an instance of ITodoDataTransporter.
     */
    #validateTodoDataTransporter(target) {
        if (!(target instanceof ITodoDataTransporter)) {
            throw new Error('Invalid todo transporter object');
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