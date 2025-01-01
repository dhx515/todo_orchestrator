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
    const pipeline = this.#pipelines[pipelineName];
    if (!pipeline) {
        throw new Error(`Pipeline ${pipelineName} not found.`);
    }

    const result = await pipeline.command(commandName, ...args);

    await this.#dispatcher.dispatch(`${pipelineName}:${commandName}`, ...args);
    
    return result;
    }
}