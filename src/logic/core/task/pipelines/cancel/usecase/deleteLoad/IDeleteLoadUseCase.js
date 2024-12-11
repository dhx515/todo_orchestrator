/**
 * @file IDeleteLoadUseCase.js
 * @description Interface of Cancel Data Delete Load Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ICancelDeleteProcessor from '../../processor/delete/ICancelDeleteProcessor';
import ICancelDataTransporter from '../../transporter/data/ICancelDataTransporter';


/** @interface */
export default class IDeleteLoadUseCase extends IUseCase {
    deleteProcessor = null;
    dataTransporer = null;
    
    constructor(deleteProcessor, dataTransporer) {
        super();

        this.#validateCancelDeleteProcessor(deleteProcessor);
        this.#validateCancelDataTransporter(dataTransporer);

        this.deleteProcessor = deleteProcessor;
        this.dataTransporer = dataTransporer;
    }

    /**
     * Validates the delete processor object.
     * @param {ICancelDeleteProcessor} target - The delete processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ICancelDeleteProcessor.
     */
    #validateCancelDeleteProcessor(target) {
        if (!(target instanceof ICancelDeleteProcessor)) {
            throw new Error('Invalid Cancel processor object');
        }
    }

    /**
     * Validates the data transporter object.
     * @param {ICancelDataTransporter} target - The data transporter instance to validate.
     * @throws Will throw an error if the target is not an instance of ICancelDataTransporter.
     */
    #validateCancelDataTransporter(target) {
        if (!(target instanceof ICancelDataTransporter)) {
            throw new Error('Invalid Cancel transporter object');
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