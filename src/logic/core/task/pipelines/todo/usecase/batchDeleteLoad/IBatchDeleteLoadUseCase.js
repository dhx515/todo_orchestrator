/**
 * @file IBatchDeleteLoadUseCase.js
 * @description Interface of Todo Delete Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ITodoBatchDeleteProcessor from '../../processor/delete/batch/ITodoBatchDeleteProcessor';
import ITodoDataTransporter from '../../transporter/data/ITodoDataTransporter';


/** @interface */
export default class IBatchDeleteLoadUseCase extends IUseCase {
    deleteProcessor = null;
    dataTransporter = null;
    
    constructor(deleteProcessor, dataTransporter) {
        super();

        this.#validateTodoBatchDeleteProcessor(deleteProcessor);
        this.#validateTodoDataTransporter(dataTransporter);

        this.deleteProcessor = deleteProcessor;
        this.dataTransporter = dataTransporter;
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
     * @param {string[]} param - The parameter for the use case.
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param) {
        throw new Error('Method not implemented');
    }
}