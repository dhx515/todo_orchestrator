/**
 * @file IDecreaseDataUseCase.js
 * @description Interface of Summary Data decrease Data Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ISummaryDecreaseProcessor from '../../processor/decrease/ISummaryDecreaseProcessor';


/** @interface */
export default class IDecreaseDataUseCase extends IUseCase {
    decreaseProcessor = null;
    
    constructor(decreaseProcessor) {
        super();

        this.#validateSummaryDecreaseProcessor(decreaseProcessor);

        this.decreaseProcessor = decreaseProcessor;
    }

    /**
     * Validates the decrease processor object.
     * @param {ISummaryDecreaseProcessor} target - The decrease processor instance to validate.
     * @throws Will throw an error if the target is not an instance of ISummaryDecreaseProcessor.
     */
    #validateSummaryDecreaseProcessor(target) {
        if (!(target instanceof ISummaryDecreaseProcessor)) {
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