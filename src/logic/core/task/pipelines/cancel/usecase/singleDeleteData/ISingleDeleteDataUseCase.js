/**
 * @file ISingleDeleteDataUseCase.js
 * @description Interface of Cancel Data Single Delete Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ICancelSingleDeleteProcessor from '../../processor/delete/single/ICancelSingleDeleteProcessor';


/** @interface */
export default class ISingleDeleteDataUseCase extends IUseCase {
    aSingleDeleteProcessor = null;
    
    constructor(aSingleDeleteProcessor) {
        super();

        this.#validateCancelSingleDeleteProcessor(aSingleDeleteProcessor);

        this.aSingleDeleteProcessor = aSingleDeleteProcessor;
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