/**
 * @file ISingleCreateDataUseCase.js
 * @description Interface of Cancel Data Single Create Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ICancelSingleCreateProcessor from '../../processor/create/single/ICancelSingleCreateProcessor';


/** @interface */
export default class ISingleCreateDataUseCase extends IUseCase {
    createProcessor = null;
    
    constructor(createProcessor) {
        super();

        this.#validateCancelSingleCreateProcessor(createProcessor);

        this.createProcessor = createProcessor;
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