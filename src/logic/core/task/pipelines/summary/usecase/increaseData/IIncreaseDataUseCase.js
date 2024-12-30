/**
 * @file IIncreaseDataUseCase.js
 * @description Interface of Summary Data increase Data Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ISummaryIncreaseProcessor from '../../processor/increase/ISummaryIncreaseProcessor';


/** @interface */
export default class ICreateDataUseCase extends IUseCase {
    increaseProcessor = null;
    
    constructor(increaseProcessor) {
        super();

        this.#validateSummaryIncreaseProcessor(increaseProcessor);

        this.increaseProcessor = increaseProcessor;
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
     * @throws {Error} If the method is not implemented in the subclass.
     */
    execute(param) {
        throw new Error('Method not implemented');
    }
}