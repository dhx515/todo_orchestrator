/**
 * @file ISingleDeleteDataUseCase.js
 * @description Interface of Done Data Single Delete Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import IDoneSingleDeleteProcessor from '../../processor/delete/single/IDoneSingleDeleteProcessor';


/** @interface */
export default class ISingleDeleteDataUseCase extends IUseCase {
    aSingleDeleteProcessor = null;
    
    constructor(aSingleDeleteProcessor) {
        super();

        this.#validateDoneSingleDeleteProcessor(aSingleDeleteProcessor);

        this.aSingleDeleteProcessor = aSingleDeleteProcessor;
    }

    /**
     * Validates the delete processor object.
     * @param {IDoneSingleDeleteProcessor} target - The delete processor instance to validate.
     * @throws Will throw an error if the target is not an instance of IDoneSingleDeleteProcessor.
     */
    #validateDoneSingleDeleteProcessor(target) {
        if (!(target instanceof IDoneSingleDeleteProcessor)) {
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