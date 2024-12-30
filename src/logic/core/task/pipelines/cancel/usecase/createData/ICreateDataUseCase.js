/**
 * @file ICreateDataUseCase.js
 * @description Interface of Cancel Data Create Data Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ICancelCreateProcessor from '../../processor/create/ICancelCreateProcessor';


/** @interface */
export default class ICreateDataUseCase extends IUseCase {
    createProcessor = null;
    
    constructor(createProcessor) {
        super();

        this.#validateCancelCreateProcessor(createProcessor);

        this.createProcessor = createProcessor;
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