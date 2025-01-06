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
        const arg = this.#extractArgs(args);
        const pipeline = this.#getPipeline(pipelineName);
        const result = await pipeline.command(commandName, arg);

        await this.#dispatcher.dispatch(`${pipelineName}:${commandName}`, arg);
        return result;
    }

    /**
     * Extracts arguments based on their length.
     * @param {Array} args - The arguments for the command.
     * @returns {*} The extracted argument(s).
     * @private
     */
    #extractArgs(args) {
        switch (args.length) {
            case 0:
                return null;
            case 1:
                return args[0];
            default:
                return args;
        }
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