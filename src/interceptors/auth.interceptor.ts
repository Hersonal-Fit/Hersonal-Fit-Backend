import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    // 헤더에 토큰 추가
    const token = request.headers.authorization;
    if (token) {
      request.headers.authorization = `Bearer ${token}`;
    }
    console.log(request.headers);

    return next.handle();
  }
}
