/**
 * @file IIncreaseLoadUseCase.js
 * @description Interface of Summary Data increase Load Use Case
 */
import IUseCase from '../../../../../../shared/interfaces/IUseCase';
import ISummaryIncreaseProcessor from '../../processor/increase/ISummaryIncreaseProcessor';
import ISummaryDataTransporter from '../../transporter/data/ISummaryDataTransporter';


/** @interface */
export default class IIncreaseLoadUseCase extends IUseCase {
    increaseProcessor = null;
    dataTransporer = null;
    
    constructor(increaseProcessor, dataTransporer) {
        super();

        this.#validateSummaryIncreaseProcessor(increaseProcessor);
        this.#validateSummaryDataTransporter(dataTransporer);

        this.increaseProcessor = increaseProcessor;
        this.dataTransporer = dataTransporer;
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