/**
 * @file ICreateDataUseCase.js
 * @description Interface of Done Data Create Data Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import IDoneCreateProcessor from '../../processor/create/IDoneCreateProcessor';


/** @interface */
export default class ICreateDataUseCase extends IUseCase {
    createProcessor = null;
    
    constructor(createProcessor) {
        super();

        this.#validateDoneCreateProcessor(createProcessor);

        this.createProcessor = createProcessor;
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