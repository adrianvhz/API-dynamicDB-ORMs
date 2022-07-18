import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { AppService, TestClass } from './app.service';

@Controller("/app")
export class AppController
{
  private readonly _testService: TestClass;

  // constructor(private readonly appService: AppService) {}

  constructor(testService: TestClass) {
    this._testService = testService;
  }

  @Get('/test')
  test(): TestClass
  {
    // this._testService.setX = 100;
    // this._testService.setY = 200;
    return this._testService;
  }

  @Get('/app')
  getMethod(): any
  {
    return `all users`
  }

  @Post('/users')
  postMethod(): any
  {
    return 1
  }

  @Put('/users/:id')
  updateMethod(): any
  {
    return 1
  }

  @Delete("/users/:id")
  deleteMethod(): any
  {
    return 1
  }
}
