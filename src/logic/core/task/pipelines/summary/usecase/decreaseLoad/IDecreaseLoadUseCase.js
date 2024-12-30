/**
 * @file IDecreaseLoadUseCase.js
 * @description Interface of Summary Data decrease Load Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ISummaryDecreaseProcessor from '../../processor/decrease/ISummaryDecreaseProcessor';
import ISummaryDataTransporter from '../../transporter/data/ISummaryDataTransporter';


/** @interface */
export default class IDecreaseLoadUseCase extends IUseCase {
    decreaseProcessor = null;
    dataTransporer = null;
    
    constructor(decreaseProcessor, dataTransporer) {
        super();

        this.#validateSummaryDecreaseProcessor(decreaseProcessor);
        this.#validateSummaryDataTransporter(dataTransporer);

        this.decreaseProcessor = decreaseProcessor;
        this.dataTransporer = dataTransporer;
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
     * Validates the data transporter object.
     * @param {ISummaryDataTransporter} target - The data transporter instance to validate.
     * @throws Will throw an error if the target is not an instance of ISummaryDataTransporter.
     */
    #validateSummaryDataTransporter(target) {
        if (!(target instanceof ISummaryDataTransporter)) {
            throw new Error('Invalid Summary transporter object');
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