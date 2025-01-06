/**
 * @file ICacheFirstLoadUseCase.js
 * @description Interface of Todo Cache First Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ITodoInitialInspector from '../../inspector/initial/ITodoInitialInspector';
import ITodoFetchProcessor from '../../processor/fetch/ITodoFetchProcessor';
import ITodoDataTransporter from '../../transporter/data/ITodoDataTransporter';


/** @interface */
export default class ICacheFirstLoadUseCase extends IUseCase {
    initialInspector = null;
    fetchProcessor = null;
    dataTransporter = null;

    constructor(initialInspector, fetchProcessor, dataTransporter) {
        super();

        this.#validateTodoInitialInspector(initialInspector);
        this.#validateTodoFetchProcessor(fetchProcessor);
        this.#validateTodoDataTransporter(dataTransporter);

        this.initialInspector = initialInspector;
        this.fetchProcessor = fetchProcessor;
        this.dataTransporter = dataTransporter;
    }

    /**
     * Validates the initial inspector object.
     * @param {ITodoInitialInspector} target - The initial inspector instance to validate.
     * @throws Will throw an error if the target is not an instance of ITodoInitialInspector.
     */
    #validateTodoInitialInspector(target) {
        if (!(target instanceof ITodoInitialInspector)) {
            throw new Error('Invalid todo inspector object');
        }
    }

    /**
     * Validates the fetch processor object.
     * @param {ITodoFetchProcessor} target - The fetch processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ITodoFetchProcessor.
     */
    #validateTodoFetchProcessor(target) {
        if (!(target instanceof ITodoFetchProcessor)) {
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
     * @param {object} param
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param) {
        throw new Error('Method not implemented');
    }
}