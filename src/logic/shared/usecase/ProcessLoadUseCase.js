/**
 * @file lProcessLoadUseCase.js
 * @description Template Class of process and load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import IProcessor from '@/logic/shared/interfaces/IProcessor';
import ITransporter from '@/logic/shared/interfaces/ITransporter';

export default class ProcessLoadUseCase extends IUseCase {
    #processor;
    #transporter;
    
    /**
     * @param {IProcessor} processor
     * @param {ITransporter} transporter
     */
    constructor(processor, transporter) {
        super();

        this.#validateProcessor(processor);
        this.#validateTransporter(transporter);

        this.#processor = processor;
        this.#transporter = transporter;
    }

    /**
     * Validates the processor object.
     * @param {IProcessor} target - The processor instance to validate.
     * @throws Will throw an error if the target is not an instance of IProcessor.
     */
    #validateProcessor(target) {
        if (!(target instanceof IProcessor)) {
            throw new Error('Invalid processor object');
        }
    }

    /**
     * Validates the transporter object.
     * @param {ITransporter} target - The transporter instance to validate.
     * @throws Will throw an error if the target is not an instance of ITransporter.
     */
    #validateTransporter(target) {
        if (!(target instanceof ITransporter)) {
            throw new Error('Invalid transporter object');
        }
    }

    /**
     * Executes the use case logic for this UseCase.
     * 
     * @param {object} param
     * @returns {object}
     * @throws {Error} If validation fails.
     */
    async execute(param) {
        await this.#processor.process(param);
        return this.#transporter.transport();
    }
}