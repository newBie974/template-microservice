'use strict';

export default class errorHandler {
    constructor(){

    }

    async checkError(ctx: Request, _next: Function) {
        try{
            await _next();
        }
        catch(error) {
            const body = {
               message: error.message,
               code: error.code || 'UNKNOWN_ERROR',
               details: error.details || undefined,
               status: error.status
            };

            return body;
        }
    }
}