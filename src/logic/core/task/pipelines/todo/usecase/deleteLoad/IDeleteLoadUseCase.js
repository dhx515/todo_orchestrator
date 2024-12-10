/**
 * @file IDeleteLoadUseCase.js
 * @description Interface of Todo Delete Load Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ITodoDeleteProcessor from '../../processor/delete/ITodoDeleteProcessor';
import ITodoDataTransporter from '../../transporter/data/ITodoDataTransporter';


/** @interface */
export default class IDeleteLoadUseCase extends IUseCase {
    deleteProcessor = null;
    dataTransporer = null;
    
    constructor(deleteProcessor, dataTransporer) {
        super();

        this.#validateTodoDeleteProcessor(deleteProcessor);
        this.#validateTodoDataTransporter(dataTransporer);

        this.deleteProcessor = deleteProcessor;
        this.dataTransporer = dataTransporer;
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