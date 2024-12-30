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
    { event: 'Todo:createLoad', handler: 'Summary:increaseLoad', priority: 10 },
    { event: 'Todo:cancelLoad', handler: 'Summary:decreaseLoad', priority: 5 },
    { event: 'Todo:cancelLoad', handler: 'Cancel:createLoad',    priority: 10 },
    { event: 'Todo:doneLoad',   handler: 'Summary:decreaseLoad', priority: 5 },
    { event: 'Todo:doneLoad',   handler: 'Done:createLoad',      priority: 10 },

    { event: 'Cancel:createLoad', handler: 'Summary:increaseLoad', priority: 5 },
    { event: 'Cancel:deleteLoad', handler: 'Summary:decreaseLoad', priority: 5 },
    { event: 'Cancel:revertLoad', handler: 'Summary:decreaseLoad', priority: 5 },
    { event: 'Cancel:revertLoad', handler: 'Todo:createLoad',      priority: 10 },
    
    { event: 'Done:createLoad', handler: 'Summary:increaseLoad', priority: 5 },
    { event: 'Done:deleteLoad', handler: 'Summary:decreaseLoad', priority: 5 },
    { event: 'Done:revertLoad', handler: 'Summary:decreaseLoad', priority: 5 },
    { event: 'Done:revertLoad', handler: 'Todo:createLoad',      priority: 10 },
];