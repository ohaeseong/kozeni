export class Response<T> {
  statusCode: number;
  message: string;
  body?: T;
}
