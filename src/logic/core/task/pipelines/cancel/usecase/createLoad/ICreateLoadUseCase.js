/**
 * @file ICreateLoadUseCase.js
 * @description Interface of Cancel Data Create Load Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ICancelCreateProcessor from '../../processor/create/ICancelCreateProcessor';
import ICancelDataTransporter from '../../transporter/data/ICancelDataTransporter';


/** @interface */
export default class ICreateLoadUseCase extends IUseCase {
    createProcessor = null;
    dataTransporer = null;
    
    constructor(createProcessor, dataTransporer) {
        super();

        this.#validateCancelCreateProcessor(createProcessor);
        this.#validateCancelDataTransporter(dataTransporer);

        this.createProcessor = createProcessor;
        this.dataTransporer = dataTransporer;
    }

    /**
     * Validates the create processor object.
     * @param {ICancelCreateProcessor} target - The create processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ICancelCreateProcessor.
     */
    #validateCancelCreateProcessor(target) {
        if (!(target instanceof ICancelCreateProcessor)) {
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