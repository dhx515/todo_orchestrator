/**
 * @class Command
 * @classdesc Wraps a UseCase and exposes a uniform asynchronous `execute` method.
 * Useful for standardizing the invocation of business logic (e.g., UseCases).
 */
import ICommand from '../interfaces/ICommand';
import IUseCase from '../interfaces/IUseCase';

export default class Command extends ICommand {
    /**
     * @type {IUseCase}
     * @private
     * @description Private UseCase instance to be executed via command.
     */
    #useCase = null;

    /**
     * Creates an instance of the Command class.
     * @param {IUseCase} useCase - The UseCase object to be wrapped by this Command.
     */
    constructor(useCase) {
        super();
        this.validateUseCase(useCase);
        this.#useCase = useCase;
    }

    /**
     * Executes the wrapped use case with provided arguments.
     * @param {...*} args - Arguments to pass to the execute function. These are spread parameters for the wrapped use case.
     * @returns {Promise<*>} A promise resolving to the result of the use case execution.
     * @throws {Error} If execution of the wrapped use case fails.
     * @example
     * const result = await myCommand.execute('param1', 'param2');
     */
    async execute(...args) {
        try {
            return await this.#useCase.execute(...args);
        } catch (error) {
            throw new Error(`Error executing command: ${error.message}`);
        }
    }
}