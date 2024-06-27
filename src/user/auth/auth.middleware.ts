import { ForbiddenException, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorization } = req.headers;

    if(!authorization) {
      throw new UnauthorizedException('You are not authorized to access this resource');
    }
    if(authorization !== '12312') {
      throw new ForbiddenException('You are not authorized to access this resource');
    }
    next();
  }
}
