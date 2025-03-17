/**
 * @file DataPipeline.js
 * @description Data Pipeline class that uses Builder for construction
 * This class manages the execution of commands that are added to the pipeline via the builder pattern.
 */

export default class DataPipeline {
    #commands = {};
    #statusVersion = 0;
    #statusUpdateSheet = [];

    /**
     * Constructs a DataPipeline instance using a command Object.
     * The command Object is expected to contain key-value pairs where the key is the command name 
     * and the value is an instance of the Command class that will be managed and executed by the pipeline.
     *
     * @param {Object<string, Command>} commands - An object containing command instances, 
     * where each key is the command name and each value is an instance of the Command class.
     */
    constructor(commands, statusUpdateSheet) {
        this.#commands = commands;
        this.#statusVersion = 0;
        this.#statusUpdateSheet = statusUpdateSheet;
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
        const res = await command.execute(...args);

        this.#updateStatus(commandName);
        return res;
    }

    #updateStatus(commandName) {
        if (!this.#statusUpdateSheet.includes(commandName)) return;
        
        this.#statusVersion++;
    }

    getStatusVersion() {
        return this.#statusVersion;
    }
}