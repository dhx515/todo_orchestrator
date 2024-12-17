/**
 * @file NoOpDispatcher.js
 * @description A placeholder dispatcher that does nothing.
 */
import IDispatcher from './IDispatcher';


export default class NoOpDispatcher extends IDispatcher{
	constructor() {
        super();
    }
	
    subscribe() {}
    dispatch() {}
}