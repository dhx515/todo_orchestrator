/**
 * @file PipelineBuilder.js
 * @description Builder class that allows the user to add custom Command objects
 */
import IUseCase from "../interfaces/IUseCase";
import ICommand from "../interfaces/ICommand";
import Command from "../command/Command";
import DataPipeline from "./DataPipeline";

export default class PipelineBuilder {
    #commands = {};

    constructor() {
        this.#commands = {};
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
     * @param {string} name - The name of the Command object
     * @param {Command} command - A custom Command object provided by the user
     * @returns {PipelineBuilder} - Returns the builder for chaining
     */
    addCommand(name, command) {
        if (command instanceof ICommand) {
            this.#commands[name] = command;
        } else {
            throw new Error(`Invalid Command: ${name} is not an instance of ICommand`);
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
}