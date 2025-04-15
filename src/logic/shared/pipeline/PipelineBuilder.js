/**
 * @file PipelineBuilder.js
 * @description DataPipeline Builder class
 */
import IUseCase from "../interfaces/IUseCase";
import Command from "../command/Command";
import DataPipeline from "./DataPipeline";
import DataPipelineSingleton from "./DataPipelineSingleton";

export default class PipelineBuilder {
    #commands = {};
    #statusUpdateSheet = [];

    constructor() {
        this.#commands = {};
        this.#statusUpdateSheet = [];
    }

    /**
     * Adds a UseCase and automatically wraps it in a Command object
     * @param {string} name - The name of the command
     * @param {IUseCase} useCase - The use case to wrap with Command
     * @returns {PipelineBuilder} - Returns the builder for chaining
     */
    addUseCase(name, useCase) {
        if (useCase instanceof IUseCase) {
            this.#commands[name] = new Command(useCase);
        } else {
            throw new Error(`Invalid UseCase: ${name} is not an instance of IUseCase`);
        }
        return this;
    }

    /**
     * Adds a custom Command object
     * @param {string} name - The name of the command
     * @param {Command} command - A custom Command object provided by the user
     * @returns {PipelineBuilder} - Returns the builder for chaining
     */
    addCommand(name, command) {
        if (command && typeof command.execute === 'function') {
            this.#commands[name] = command;
        } else {
            throw new Error(`Invalid Command: ${name} must implement an 'execute' method`);
        }
        return this;
    }

    addStatusUpdateSheet(statusUpdateSheet) {
        this.#statusUpdateSheet = statusUpdateSheet;
        return this;
    }

    /**
     * Builds the DataPipeline object with commands
     * @returns {DataPipeline} - The constructed DataPipeline object
     */
    build() {
        return new DataPipeline(this.#commands, this.#statusUpdateSheet);
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