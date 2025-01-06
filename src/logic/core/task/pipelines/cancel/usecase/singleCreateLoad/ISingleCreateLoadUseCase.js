/**
 * @file ISingleCreateLoadUseCase.js
 * @description Interface of Cancel Data Single Create Load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ICancelSingleCreateProcessor from '../../processor/create/single/ICancelSingleCreateProcessor';
import ICancelDataTransporter from '../../transporter/data/ICancelDataTransporter';


/** @interface */
export default class ISingleCreateLoadUseCase extends IUseCase {
    createProcessor = null;
    dataTransporter = null;
    
    constructor(createProcessor, dataTransporter) {
        super();

        this.#validateCancelSingleCreateProcessor(createProcessor);
        this.#validateCancelDataTransporter(dataTransporter);

        this.createProcessor = createProcessor;
        this.dataTransporter = dataTransporter;
    }

    /**
     * Validates the create processor object.
     * @param {ICancelSingleCreateProcessor} target - The create processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ICancelSingleCreateProcessor.
     */
    #validateCancelSingleCreateProcessor(target) {
        if (!(target instanceof ICancelSingleCreateProcessor)) {
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