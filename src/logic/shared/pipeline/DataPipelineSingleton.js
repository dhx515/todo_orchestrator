/**
 * @file DataPipelineSingleton.js
 * @description Data Pipeline class that uses Builder for construction
 * This class manages the execution of commands that are added to the pipeline via the builder pattern.
 */

export default class DataPipelineSingleton {
    #commands = {};
    key = {};

    /**
     * Initializes a singleton instance of the DataPipeline with a set of commands.
     * The commands object should contain key-value pairs, where each key represents a command name,
     * and the corresponding value is an instance of the Command class. These commands will be 
     * managed and executed by the pipeline.
     * 
     * If an instance already exists, this constructor will return the existing singleton instance.
     *
     * @param {Object<string, Command>} commands - An object holding command instances. 
     * Each key is a command name, and each value is an instance of the Command class.
     * @returns {DataPipelineSingleton} The singleton instance of the DataPipeline.
     */
    constructor(commands, key) {

        if (DataPipelineSingleton.instance && DataPipelineSingleton.instance.key === key) {
            return DataPipelineSingleton.instance;
        }
    
        this.#commands = commands;
        this.key = key;
        DataPipelineSingleton.instance = this;
    }

    /**
     * Executes a command by its name, passing any arguments provided.
     * The method looks up the command from the pipeline's list of registered commands 
     * and calls its `execute` method with the provided arguments.
     *
     * @param {string} commandName - The name of the command to execute.
     * @param {...Object} args - Arguments to pass to the command's execute method.
     * @returns {Promise<*>} - Returns the result of the command execution.
     * @throws {Error} If the command is not found or does not have an execute method.
     *
     * @example
     * const result = await dataPipeline.command('initialLoad', param1, param2);
     */
    async command(commandName, ...args) {
        const command = this.#commands[commandName];
        if (!command || typeof command.execute !== "function") {
            throw new Error(`Command ${commandName} not found`);
        }
        return await command.execute(...args);
    }
}