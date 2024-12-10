/**
 * @file NoOpDispatcher.js
 * @description A placeholder dispatcher that does nothing.
 */

export default class NoOpDispatcher extends IDispatcher{
	constructor() {
        super();
    }
	
    subscribe() {}
    dispatch() {}
}