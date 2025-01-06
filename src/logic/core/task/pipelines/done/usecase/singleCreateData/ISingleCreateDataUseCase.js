/**
 * @file ISingleCreateDataUseCase.js
 * @description Interface of Done Data Single Create Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import IDoneSingleCreateProcessor from '../../processor/create/single/IDoneSingleCreateProcessor';


/** @interface */
export default class ICreateDataUseCase extends IUseCase {
    createProcessor = null;
    
    constructor(createProcessor) {
        super();

        this.#validateDoneSingleCreateProcessor(createProcessor);

        this.createProcessor = createProcessor;
    }

    /**
     * Validates the create processor object.
     * @param {IDoneSingleCreateProcessor} target - The create processor instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneSingleCreateProcessor.
     */
    #validateDoneSingleCreateProcessor(target) {
        if (!(target instanceof IDoneSingleCreateProcessor)) {
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