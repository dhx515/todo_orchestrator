/**
 * @file IIncreaseDataUseCase.js
 * @description Interface of Summary Data increase Data Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import ISummaryIncreaseProcessor from '../../processor/increase/ISummaryIncreaseProcessor';


/** @interface */
export default class ICreateDataUseCase extends IUseCase {
    aIncreaseProcessor = null;
    
    constructor(aIncreaseProcessor) {
        super();

        this.#validateSummaryIncreaseProcessor(aIncreaseProcessor);

        this.aIncreaseProcessor = aIncreaseProcessor;
    }

    /**
     * Validates the increase processor object.
     * @param {ISummaryIncreaseProcessor} target - The increase processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ISummaryIncreaseProcessor.
     */
    #validateSummaryIncreaseProcessor(target) {
        if (!(target instanceof ISummaryIncreaseProcessor)) {
            throw new Error('Invalid Summary processor object');
        }
    }

    /**
     * Executes the use case logic for this UseCase.
     * 
     * @abstract
     * @param {string} param
     * @param {number} value
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param, value = 1) {
        throw new Error('Method not implemented');
    }
}