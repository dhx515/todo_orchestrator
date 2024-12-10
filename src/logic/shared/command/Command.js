/**
 * @class Command
 * @description Class to wrap a function and provide an interface for executing it with arguments.
 * This class is primarily used to encapsulate business logic (e.g., UseCases) and provide a uniform interface for execution.
 */
export default class Command {
    /**
     * @private
     * @type {Function}
     * @description The function that will be executed when the `execute` method is called.
     */
    #executeFn = null;

    /**
     * Creates an instance of the Command class.
     * @param {Function} executeFn - The function to be executed by this Command. 
     * The function can accept any number of arguments and return a promise if it's asynchronous.
     * @example
     * const myCommand = new Command(async (param1, param2) => {
     *   // Some business logic here
     *   return await performAction(param1, param2);
     * });
     */
    constructor(executeFn) {
        if (typeof executeFn !== 'function') {
            throw new Error('executeFn must be a function');
        }
        this.#executeFn = executeFn;
    }

    /**
     * Executes the wrapped function with provided arguments.
     * @param  {...Object} args - Arguments to pass to the execute function. These can be dynamic and based on the specific use case.
     * @returns {Promise<any>} - Returns a promise that resolves with the result of the wrapped function's execution.
     * @throws {Error} - Throws an error if the function cannot be executed.
     * @example
     * const result = await myCommand.execute('param1', 'param2');
     */
    async execute(...args) {
        try {
            return await this.#executeFn(...args);
        } catch (error) {
            throw new Error(`Error executing command: ${error.message}`);
        }
    }
}