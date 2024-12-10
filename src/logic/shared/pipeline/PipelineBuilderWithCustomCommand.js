/**
 * @file PipelineBuilderWithCustomCommand.js
 * @description Builder class that allows the user to add custom Command objects
 */
import DataPipeline from "./DataPipeline";
import DataPipelineSingleton from "./DataPipelineSingleton";

export default class PipelineBuilderWithCustomCommand {
    #commands = {};

    constructor() {
        this.#commands = {};
    }

    /**
     * Adds a custom Command object
     * @param {string} name - The name of the command
     * @param {Command} command - A custom Command object provided by the user
     * @returns {PipelineBuilderWithCustomCommand} - Returns the builder for chaining
     */
    addCommand(name, command) {
        if (command && typeof command.execute === 'function') {
        this.#commands[name] = command;
        } else {
        throw new Error(`Invalid Command: ${name} must implement an 'execute' method`);
        }
        return this;
    }

    /**
     * Builds the DataPipeline object with custom commands
     * @returns {DataPipeline} - The constructed DataPipeline object
     */
    build() {
        return new DataPipeline(this.#commands);
    }

    /**
     * Builds the Singleton DataPipeline object with commands
     * @param {string} key - The key of the singleton object
     * @returns {DataPipeline} - The constructed Singleton DataPipeline object
     */
    buildSingleton(key) {
        return new DataPipelineSingleton(this.#commands, key);
    }
}