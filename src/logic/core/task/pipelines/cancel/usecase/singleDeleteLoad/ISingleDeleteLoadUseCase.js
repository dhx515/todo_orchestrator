/**
 * @file ISingleDeleteLoadUseCase.js
 * @description Interface of Cancel Data Single Delete Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ICancelSingleDeleteProcessor from '../../processor/delete/single/ICancelSingleDeleteProcessor';
import ICancelDataTransporter from '../../transporter/data/ICancelDataTransporter';


/** @interface */
export default class ISingleDeleteLoadUseCase extends IUseCase {
    deleteProcessor = null;
    dataTransporter = null;
    
    constructor(deleteProcessor, dataTransporter) {
        super();

        this.#validateCancelSingleDeleteProcessor(deleteProcessor);
        this.#validateCancelDataTransporter(dataTransporter);

        this.deleteProcessor = deleteProcessor;
        this.dataTransporter = dataTransporter;
    }

    /**
     * Validates the delete processor object.
     * @param {ICancelSingleDeleteProcessor} target - The delete processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ICancelSingleDeleteProcessor.
     */
    #validateCancelSingleDeleteProcessor(target) {
        if (!(target instanceof ICancelSingleDeleteProcessor)) {
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