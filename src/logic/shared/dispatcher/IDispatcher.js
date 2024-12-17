/**
 * @file IDispatcher.js
 * @description Interface of Dispatchers to dispatch events for registered handlers with priority support.
 */


export default class IDispatcher {

    subscribe() {
        throw new Error('Method not implemented');
    }

    dispatch() {
        throw new Error('Method not implemented');
    }
}