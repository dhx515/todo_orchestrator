/**
 * @file ISingleDeleteLoadUseCase.js
 * @description Interface of Todo Single Delete Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ITodoSingleDeleteProcessor from '../../processor/delete/single/ITodoSingleDeleteProcessor';
import ITodoDataTransporter from '../../transporter/data/ITodoDataTransporter';


/** @interface */
export default class IDeleteLoadUseCase extends IUseCase {
    aSingleDeleteProcessor = null;
    aDataTransporter = null;
    
    constructor(aSingleDeleteProcessor, aDataTransporter) {
        super();

        this.#validateTodoSingleDeleteProcessor(aSingleDeleteProcessor);
        this.#validateTodoDataTransporter(aDataTransporter);

        this.aSingleDeleteProcessor = aSingleDeleteProcessor;
        this.aDataTransporter = aDataTransporter;
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