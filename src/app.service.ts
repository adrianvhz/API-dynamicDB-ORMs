import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'The quick brown fox jumpss over lazy dog';
  }

  getHi(): string {
  return "Hola a todos!"
  }
}

@Injectable()
export class TestClass
{
  x: number;
  y: number;

  constructor(x: number, y: number)
  {
    this.x = x;
    this.y = y;
  }

  set setX(valueX)
  {
    this.x = valueX;
  }

  set setY(valueY)
  {
    this.y = valueY;
  }
}
