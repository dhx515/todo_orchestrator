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
    { event: 'Todo:singleCreate', handler: 'Summary:loadData',    priority: 10 },
    { event: 'Todo:singleCancel', handler: 'Cancel:singleCreate', priority: 5 },
    { event: 'Todo:singleDone',   handler: 'Done:singleCreate',   priority: 5 },
    { event: 'Todo:singleDelete', handler: 'Summary:loadData',    priority: 5 },

    // Todo Data Pipeline - Batch Actions
    { event: 'Todo:batchCreate', handler: 'Summary:loadData',    priority: 10 },
    { event: 'Todo:batchCancel', handler: 'Summary:loadData',    priority: 5 },
    { event: 'Todo:batchCancel', handler: 'Cancel:batchCreate', priority: 10 },
    { event: 'Todo:batchDone',   handler: 'Summary:loadData',    priority: 5 },
    { event: 'Todo:batchDone',   handler: 'Done:batchCreate',   priority: 10 },
    { event: 'Todo:batchDelete', handler: 'Summary:loadData',    priority: 5 },

    // Cancel Data Pipeline - Single Actions
    { event: 'Cancel:singleCreate', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Cancel:singleDelete', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Cancel:singleRevert', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Cancel:singleRevert', handler: 'Todo:singleCreate', priority: 10 },

    // Cancel Data Pipeline - Batch Actions
    { event: 'Cancel:batchCreate', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Cancel:batchDelete', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Cancel:batchRevert', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Cancel:batchRevert', handler: 'Todo:batchCreate', priority: 10 },
    
    // Done Data Pipeline - Single Actions
    { event: 'Done:singleCreate', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:singleDelete', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:singleRevert', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:singleRevert', handler: 'Todo:singleCreate', priority: 10 },

    // Done Data Pipeline - Batch Actions
    { event: 'Done:batchCreate', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:batchDelete', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:batchRevert', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:batchRevert', handler: 'Todo:batchCreate',  priority: 10 },
];