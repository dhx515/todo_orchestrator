/**
 * @file CustomEventDispatcher.js
 * @description Dispatches events to registered handlers with priority support by custom rules.
 */
import IDispatcher from '../../../shared/dispatcher/IDispatcher';


export default class CustomEventDispatcher extends IDispatcher{
    #handlers = {};
    #pipelines = {};
    
    constructor(handlers = {}, pipelines = {}) {
        super();
        this.#handlers = handlers;
        this.#pipelines = pipelines;
    }

    /**
     * Subscribes to an event with a pipeline command.
     * @param {string} eventName - The name of the event.
     * @param {string} handlerCommand - The pipeline and command in "PipelineName:commandName" format.
     * @param {number} priority - The priority of the handler (lower numbers run first).
     */
    subscribe(eventName, handlerCommand, priority = 10) {
        if ( !Object.prototype.hasOwnProperty.call(this.#handlers, eventName) ) {
            this.#handlers[eventName] = [];
        }

        // Add handler to the list with its priority
        this.#handlers[eventName].push({ command: handlerCommand, priority });
        // Sort handlers by priority
        this.#handlers[eventName].sort((a, b) => a.priority - b.priority);
    }

    /**
     * Dispatches an event, invoking all subscribed pipeline commands in order.
     * @param {string} eventName - The name of the event.
     * @param {string} param - Param for the pipeline commands.
     */
    async dispatch(eventName, param) {
        const commands = this.#handlers[eventName];
        if (!commands) return;
        
        for (const { command } of commands) {
            const [pipelineName, commandName] = command.split(':');
            const pipeline = this.#pipelines[pipelineName];
            if (!pipeline) {
                throw new Error(`Pipeline "${pipelineName}" not found.`);
            }

            switch(pipelineName) {
                case 'Summary': {
                    const triggerPipelineName = eventName.split(':')[0];
                    await pipeline.command(commandName, triggerPipelineName);
                    break;
                }
                case 'Todo':
                case 'Cancel':
                case 'Done': {
                    await pipeline.command(commandName, param);
                    await this.dispatch(command, param);
                    break;
                }
                default:
                    break;
            }
        }
    }
}