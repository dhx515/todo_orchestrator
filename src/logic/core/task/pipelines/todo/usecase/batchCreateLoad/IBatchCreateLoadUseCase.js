/**
 * @file IBatchCreateLoadUseCase.js
 * @description Interface of Todo Batch Create Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ITodoBatchCreateProcessor from '../../processor/create/batch/ITodoBatchCreateProcessor';
import ITodoDataTransporter from '../../transporter/data/ITodoDataTransporter';


/** @interface */
export default class ICreateLoadUseCase extends IUseCase {
    createProcessor = null;
    dataTransporter = null;
    
    constructor(createProcessor, dataTransporter) {
        super();

        this.#validateTodoBatchCreateProcessor(createProcessor);
        this.#validateTodoDataTransporter(dataTransporter);

        this.createProcessor = createProcessor;
        this.dataTransporter = dataTransporter;
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