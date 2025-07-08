/**
 * @file ProcessUseCase.js
 * @description Template Class of process Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import IProcessor from '@/logic/shared/interfaces/IProcessor';

export default class ProcessLoadUseCase extends IUseCase {
    #processor;
    
    /**
     * @param {IProcessor} processor
     */
    constructor(processor) {
        super();

        this.#validateProcessor(processor);

        this.#processor = processor;
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
     * Executes the use case logic for this UseCase.
     * 
     * @param {object} param
     * @returns {object}
     * @throws {Error} If validation fails.
     */
    async execute(param) {
        await this.#processor.process(param);
    }
}