/**
 * @file ICreateLoadUseCase.js
 * @description Interface of Done Data Create Load Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import IDoneCreateProcessor from '../../processor/create/IDoneCreateProcessor';
import IDoneDataTransporter from '../../transporter/data/IDoneDataTransporter';


/** @interface */
export default class ICreateLoadUseCase extends IUseCase {
    createProcessor = null;
    dataTransporer = null;
    
    constructor(createProcessor, dataTransporer) {
        super();

        this.#validateDoneCreateProcessor(createProcessor);
        this.#validateDoneDataTransporter(dataTransporer);

        this.createProcessor = createProcessor;
        this.dataTransporer = dataTransporer;
    }

    /**
     * Validates the create processor object.
     * @param {IDoneCreateProcessor} target - The create processor instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneCreateProcessor.
     */
    #validateDoneCreateProcessor(target) {
        if (!(target instanceof IDoneCreateProcessor)) {
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