import { Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guard/auth/auth.guard';

@Controller()
export class HelloController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).send('Hello World');
  }

  @Get('/ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 10;
  }

  @Get('/user/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  great(@Query(ValidateUserPipe) query: {name: string, age: number}) {
    console.log(typeof query.age)
    console.log(typeof query.name)
    return `Hello ${query.name}, you are ${query.age} years old`  }
}
