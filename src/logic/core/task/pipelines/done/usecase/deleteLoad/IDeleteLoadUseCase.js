/**
 * @file IDeleteLoadUseCase.js
 * @description Interface of Done Data Delete Load Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import IDoneDeleteProcessor from '../../processor/delete/IDoneDeleteProcessor';
import IDoneDataTransporter from '../../transporter/data/IDoneDataTransporter';


/** @interface */
export default class IDeleteLoadUseCase extends IUseCase {
    deleteProcessor = null;
    dataTransporer = null;
    
    constructor(deleteProcessor, dataTransporer) {
        super();

        this.#validateDoneDeleteProcessor(deleteProcessor);
        this.#validateDoneDataTransporter(dataTransporer);

        this.deleteProcessor = deleteProcessor;
        this.dataTransporer = dataTransporer;
    }

    /**
     * Validates the delete processor object.
     * @param {IDoneDeleteProcessor} target - The delete processor instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneDeleteProcessor.
     */
    #validateDoneDeleteProcessor(target) {
        if (!(target instanceof IDoneDeleteProcessor)) {
            throw new Error('Invalid Done processor object');
        }
    }

    /**
     * Validates the data transporter object.
     * @param {IDoneDataTransporter} target - The data transporter instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneDataTransporter.
     */
    #validateDoneDataTransporter(target) {
        if (!(target instanceof IDoneDataTransporter)) {
            throw new Error('Invalid Done transporter object');
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