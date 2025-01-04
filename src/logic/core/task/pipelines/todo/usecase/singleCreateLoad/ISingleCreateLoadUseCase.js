/**
 * @file ISingleCreateLoadUseCase.js
 * @description Interface of Todo Single Create Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ITodoSingleCreateProcessor from '../../processor/create/single/ITodoSingleCreateProcessor';
import ITodoDataTransporter from '../../transporter/data/ITodoDataTransporter';


/** @interface */
export default class ISingleCreateLoadUseCase extends IUseCase {
    aSingleCreateProcessor = null;
    aDataTransporter = null;
    
    constructor(aSingleCreateProcessor, aDataTransporter) {
        super();

        this.#validateTodoSingleCreateProcessor(aSingleCreateProcessor);
        this.#validateTodoDataTransporter(aDataTransporter);

        this.aSingleCreateProcessor = aSingleCreateProcessor;
        this.aDataTransporter = aDataTransporter;
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
     * @param {string} param - The parameter(s) for the use case.
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param) {
        throw new Error('Method not implemented');
    }
}