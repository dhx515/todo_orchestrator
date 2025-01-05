/**
 * @file subscriptions.js
 * @description This file contains the subscription configurations for the Data Pipeline Orchestrator.
 * Each subscription links an event to a handler with a specified priority.
 * These configurations are used to initialize the orchestrator with the appropriate event handling logic.
 */

/**
 * @typedef {Object} Subscription
 * @property {string} event - The name of the event to subscribe to.
 * @property {string} handler - The name of the handler to execute when the event is triggered.
 * @property {number} priority - The priority of the handler for the event.
 */

/**
 * An array of subscription configurations for the Data Pipeline Orchestrator.
 * @type {Subscription[]}
 */
export const subscriptions = [
    // Todo Data Pipeline - Single Actions
    { event: 'Todo:singleCreateLoad', handler: 'Summary:increaseData',    priority: 10 },
    { event: 'Todo:singleCreateData', handler: 'Summary:increaseData',    priority: 10 },
    { event: 'Todo:singleCancelLoad', handler: 'Summary:decreaseData',    priority: 5 },
    { event: 'Todo:singleCancelLoad', handler: 'Cancel:singleCreateData', priority: 10 },
    { event: 'Todo:singleDoneLoad',   handler: 'Summary:decreaseData',    priority: 5 },
    { event: 'Todo:singleDoneLoad',   handler: 'Done:singleCreateData',   priority: 10 },
    { event: 'Todo:singleDeleteLoad', handler: 'Summary:decreaseData',    priority: 5 },

    // Todo Data Pipeline - Batch Actions
    { event: 'Todo:batchCreateLoad', handler: 'Summary:increaseData',    priority: 10 },
    { event: 'Todo:batchCreateData', handler: 'Summary:increaseData',    priority: 10 },
    { event: 'Todo:batchCancelLoad', handler: 'Summary:decreaseData',    priority: 5 },
    { event: 'Todo:batchCancelLoad', handler: 'Cancel:batchCreateData', priority: 10 },
    { event: 'Todo:batchDoneLoad',   handler: 'Summary:decreaseData',    priority: 5 },
    { event: 'Todo:batchDoneLoad',   handler: 'Done:batchCreateData',   priority: 10 },
    { event: 'Todo:batchDeleteLoad', handler: 'Summary:decreaseData',    priority: 5 },

    // Cancel Data Pipeline - Single Actions
    { event: 'Cancel:singleCreateLoad', handler: 'Summary:increaseData',  priority: 5 },
    { event: 'Cancel:singleCreateData', handler: 'Summary:increaseData',  priority: 10 },
    { event: 'Cancel:singleDeleteLoad', handler: 'Summary:decreaseData',  priority: 5 },
    { event: 'Cancel:singleRevertLoad', handler: 'Summary:decreaseData',  priority: 5 },
    { event: 'Cancel:singleRevertLoad', handler: 'Todo:singleCreateData', priority: 10 },

    // Cancel Data Pipeline - Batch Actions
    { event: 'Cancel:batchCreateLoad', handler: 'Summary:increaseData',  priority: 5 },
    { event: 'Cancel:batchCreateData', handler: 'Summary:increaseData',  priority: 10 },
    { event: 'Cancel:batchDeleteLoad', handler: 'Summary:decreaseData',  priority: 5 },
    { event: 'Cancel:batchRevertLoad', handler: 'Summary:decreaseData',  priority: 5 },
    { event: 'Cancel:batchRevertLoad', handler: 'Todo:batchCreateData', priority: 10 },
    
    // Done Data Pipeline - Single Actions
    { event: 'Done:singleCreateLoad', handler: 'Summary:increaseData',  priority: 5 },
    { event: 'Done:singleCreateData', handler: 'Summary:increaseData',  priority: 5 },
    { event: 'Done:singleDeleteLoad', handler: 'Summary:decreaseData',  priority: 5 },
    { event: 'Done:singleRevertLoad', handler: 'Summary:decreaseData',  priority: 5 },
    { event: 'Done:singleRevertLoad', handler: 'Todo:singleCreateData', priority: 10 },

    // Done Data Pipeline - Batch Actions
    { event: 'Done:batchCreateLoad', handler: 'Summary:increaseData',  priority: 5 },
    { event: 'Done:batchCreateData', handler: 'Summary:increaseData',  priority: 5 },
    { event: 'Done:batchDeleteLoad', handler: 'Summary:decreaseData',  priority: 5 },
    { event: 'Done:batchRevertLoad', handler: 'Summary:decreaseData',  priority: 5 },
    { event: 'Done:batchRevertLoad', handler: 'Todo:batchCreateData',  priority: 10 },
];