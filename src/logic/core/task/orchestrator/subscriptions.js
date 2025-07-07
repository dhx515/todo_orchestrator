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
    { event: 'Todo:singleCancel', handler: 'Cancel:singleCreateData', priority: 5 },
    { event: 'Todo:singleDone',   handler: 'Done:singleCreateData',   priority: 5 },
    { event: 'Todo:singleDelete', handler: 'Summary:loadData',    priority: 5 },

    // Todo Data Pipeline - Batch Actions
    { event: 'Todo:batchCreate', handler: 'Summary:loadData',    priority: 10 },
    { event: 'Todo:batchCancel', handler: 'Summary:loadData',    priority: 5 },
    { event: 'Todo:batchCancel', handler: 'Cancel:batchCreateData', priority: 10 },
    { event: 'Todo:batchDone',   handler: 'Summary:loadData',    priority: 5 },
    { event: 'Todo:batchDone',   handler: 'Done:batchCreateData',   priority: 10 },
    { event: 'Todo:batchDelete', handler: 'Summary:loadData',    priority: 5 },

    // Cancel Data Pipeline - Single Actions
    { event: 'Cancel:singleCreateLoad', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Cancel:singleCreateData', handler: 'Summary:loadData',  priority: 10 },
    { event: 'Cancel:singleDeleteLoad', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Cancel:singleRevertLoad', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Cancel:singleRevertLoad', handler: 'Todo:singleCreate', priority: 10 },

    // Cancel Data Pipeline - Batch Actions
    { event: 'Cancel:batchCreateLoad', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Cancel:batchCreateData', handler: 'Summary:loadData',  priority: 10 },
    { event: 'Cancel:batchDeleteLoad', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Cancel:batchRevertLoad', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Cancel:batchRevertLoad', handler: 'Todo:batchCreate', priority: 10 },
    
    // Done Data Pipeline - Single Actions
    { event: 'Done:singleCreateLoad', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:singleCreateData', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:singleDeleteLoad', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:singleRevertLoad', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:singleRevertLoad', handler: 'Todo:singleCreate', priority: 10 },

    // Done Data Pipeline - Batch Actions
    { event: 'Done:batchCreateLoad', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:batchCreateData', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:batchDeleteLoad', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:batchRevertLoad', handler: 'Summary:loadData',  priority: 5 },
    { event: 'Done:batchRevertLoad', handler: 'Todo:batchCreate',  priority: 10 },
];