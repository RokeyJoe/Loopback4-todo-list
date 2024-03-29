import {
  globalInterceptor,
  Interceptor,
  InvocationContext,
  InvocationResult,
  Provider,
  ValueOrPromise
} from '@loopback/core';

/**
 * This class will be bound to the application as an `Interceptor` during
 * `boot`
 */
@globalInterceptor('', {tags: {name: 'response'}})
export class ResponseInterceptor implements Provider<Interceptor> {
  /*
  constructor() {}
  */

  /**
   * This method is used by LoopBack context to produce an interceptor function
   * for the binding.
   *
   * @returns An interceptor function
   */
  value() {
    return this.intercept.bind(this);
  }

  /**
   * The logic to intercept an invocation
   * @param invocationCtx - Invocation context
   * @param next - A function to invoke next interceptor or the target method
   */
  async intercept(
    invocationCtx: InvocationContext,
    next: () => ValueOrPromise<InvocationResult>,
  ) {
    try {
      // Add pre-invocation logic here
      const result = await next();
      console.log('invocationCtx: ', invocationCtx);
      const res: ResData<any> = {
        status: 'Success',
        msg: '',
        data: result
      }
      // Add post-invocation logic here
      return res;
    } catch (err) {
      // Add error handling logic here
      console.log('err: ', err);
      return {
        status: 'Failed',
        msg: err.message,
        data: null
      }
    }
  }
}


export interface ResData<T> {
  status: string;
  msg: string;
  data: T
}
