/**
 * @file Orchestrator.js
 * @description Manages multiple data pipelines and handles event dispatching.
 */


export default class Orchestrator {
    #pipelines = {};
    #dispatcher = null;

    constructor(pipelines, dispatcher) {
        this.#pipelines = pipelines;
        this.#dispatcher = dispatcher;
    }

    /**
     * Executes a command and dispatches events.
     * @param {string} pipelineName - The name of the pipeline.
     * @param {string} commandName - The name of the command.
     * @param {...*} args - Arguments for the command.
     * @returns {Promise<*>} The result of the command execution.
     */
    async command(pipelineName, commandName, ...args) {
        let result;
        if (args.length === 1) {
            result = await this.#executeSingleCommand(pipelineName, commandName, args[0]);
        } else if (args.length >= 2) {
            result = await this.#executeBatchCommand(pipelineName, commandName, args);
        }

        return result;
    }

    /**
     * Executes a command with a single argument and dispatches events.
     * @param {string} pipelineName - The name of the pipeline.
     * @param {string} commandName - The name of the command.
     * @param {*} arg - The argument for the command.
     * @returns {Promise<*>} The result of the command execution.
     * @private
     */
    async #executeSingleCommand(pipelineName, commandName, arg) {
        const pipeline = this.#getPipeline(pipelineName);
        const result = await pipeline.command(commandName, arg);

        await this.#dispatcher.dispatch(`${pipelineName}:${commandName}`, arg);
        return result;
    }

    /**
     * Executes a command with multiple arguments and dispatches events.
     * @param {string} pipelineName - The name of the pipeline.
     * @param {string} commandName - The name of the command.
     * @param {Array} args - The arguments for the command.
     * @returns {Promise<*>} The result of the command execution.
     * @private
     */
    async #executeBatchCommand(pipelineName, commandName, args) {
        const pipeline = this.#getPipeline(pipelineName);
        const result = await pipeline.command(commandName, args);
        
        await this.#dispatcher.dispatch(`${pipelineName}:${commandName}`, args);
        return result;
    }

    /**
     * Retrieves the pipeline by name.
     * @param {string} pipelineName - The name of the pipeline.
     * @returns {Object} The pipeline object.
     * @private
     */
    #getPipeline(pipelineName) {
        const pipeline = this.#pipelines[pipelineName];
        if (!pipeline) {
            throw new Error(`Pipeline "${pipelineName}" not found`);
        }

        return pipeline;
    }
}