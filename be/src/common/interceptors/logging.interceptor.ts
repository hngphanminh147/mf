import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const startTime = new Date();
    const handlerName = context.getHandler().name;
    const controllerName = context.getClass().name;
    const incomingMessage = context.switchToHttp().getRequest();
    // const serverResponse = context.switchToHttp().getResponse();

    this.logger.log(
      `${controllerName}.${handlerName} [${startTime.toISOString()}] Processing with params={${JSON.stringify(
        incomingMessage.params,
      )}}, query={${JSON.stringify(incomingMessage.query)}}`,
    );

    return next.handle().pipe(
      //   tap((data) => {
      tap(() => {
        const endTime = new Date();

        this.logger.log(
          `[${endTime.toISOString()}] ${controllerName}.${handlerName} takes {${
            endTime.valueOf() - startTime.valueOf()
          }ms} to return`,
        );
      }),
    );
  }
}
