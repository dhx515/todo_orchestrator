/**
 * @file ConditionalProcessLoadUseCase.js
 * @description Template Class of conditional process and load Use Case
 */
import IUseCase from '@/logic/shared/interfaces/IUseCase';
import IInspector from '@/logic/shared/interfaces/IInspector';
import IProcessor from '@/logic/shared/interfaces/IProcessor';
import ITransporter from '@/logic/shared/interfaces/ITransporter';

export default class ConditionalProcessLoadUseCase extends IUseCase {
    #inspector;
    #processor;
    #transporter;
    
    /**
     * @param {IInspector} inspector
     * @param {IProcessor} processor
     * @param {ITransporter} transporter
     */
    constructor(inspector, processor, transporter) {
        super();

        this.#validateInspector(inspector);
        this.#validateProcessor(processor);
        this.#validateTransporter(transporter);

        this.#inspector = inspector;
        this.#processor = processor;
        this.#transporter = transporter;
    }

    /**
     * Validates the inspector object.
     * @param {IInspector} target - The inspector instance to validate.
     * @throws Will throw an error if the target is not an instance of IInspector.
     */
    #validateInspector(target) {
        if (!(target instanceof IInspector)) {
            throw new Error('Invalid inspector object');
        }
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
        const isValid = await this.#inspector.inspect();
        if (isValid) {
            await this.#processor.process(param);
        }
        return this.#transporter.transport();
    }
}