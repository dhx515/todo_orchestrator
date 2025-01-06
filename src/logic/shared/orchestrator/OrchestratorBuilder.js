/**
 * @file OrchestratorBuilder.js
 * @description Builder for creating Orchestrator instances.
 */
import Orchestrator from './Orchestrator';
import EventDispatcher from '../dispatcher/EventDispatcher';
import NoOpDispatcher from '../dispatcher/NoOpDispatcher';


export default class OrchestratorBuilder {
    #pipelines = {};
    #dispatcher = null;

    /**
     * Adds a pipeline to the orchestrator.
     * @param {string} name - The name of the pipeline.
     * @param {DataPipeline} pipeline - The pipeline instance.
     * @returns {OrchestratorBuilder} This builder instance.
     */
    addPipeline(name, pipeline) {
        this.#pipelines[name] = pipeline;
        return this;
    }

    /**
     * Initializes the basic event dispatcher.
     * @returns {OrchestratorBuilder} This builder instance.
     */
    initializeAutoDispatcher() {
        this.#dispatcher = new EventDispatcher({}, this.#pipelines);
        return this;
    }

    /**
     * Initializes the event dispatcher by dependency injection.
     * @param {class} 
     * @returns {OrchestratorBuilder} This builder instance.
     */
    initializeCustomDispatcher(customEventDispatcher) {
        this.#dispatcher = new customEventDispatcher({}, this.#pipelines);
        return this;
    }

    /**
     * Subscribes an event to the dispatcher.
     * @param {string} eventName - The event name.
     * @param {string} handlerCommand - The event handler command name.
     * @param {number} priority - The priority of the handler.
     * @returns {OrchestratorBuilder} This builder instance.
     */
    subscribe(eventName, handlerCommand, priority = 10) {
        if (!this.#dispatcher) {
            this.initializeAutoDispatcher();
        }
        this.#dispatcher.subscribe(eventName, handlerCommand, priority);
        return this;
    }

    /**
     * Validates the OrchestratorBuilder configuration.
     * Ensures that all necessary dependencies, such as pipelines and the dispatcher, are properly initialized.
     * If the dispatcher is not initialized, it assigns a default NoOpDispatcher.
     * 
     * @throws {Error} If no pipelines have been registered.
     */
    #validate() {
        if (Object.keys(this.#pipelines).length === 0) {
            throw new Error("No pipelines have been registered.");
        }
        
        // If the dispatcher is not initialized, assign NoOpDispatcher
        if (!this.#dispatcher) {
            console.warn("Dispatcher not initialized. Defaulting to NoOpDispatcher.");
            this.#dispatcher = new NoOpDispatcher();
        }
    }

    /**
     * Builds the orchestrator.
     * @returns {Orchestrator} The constructed orchestrator instance.
     */
    build() {
        this.#validate();
    return new Orchestrator(this.#pipelines, this.#dispatcher);
    }
}
