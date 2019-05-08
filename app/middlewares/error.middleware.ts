import { NextFunction, Request, Response } from 'express';
import HttpException from './HttpExceptions';
 
function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
  const status = error.status || 500;
  const message = error.message || 'Unknown message error';
  const code = error.code || 'UNKNOWN_ERROR_CODE'
  response
    .status(status)
    .send({
      status,
      message,
      code,
    })
}
 
export default errorMiddleware;