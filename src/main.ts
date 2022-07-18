import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import connectToDB from '../utils/db'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
  await connectToDB();
}

bootstrap();

// interface Named {
//   Username: string;
// }

// class Brand implements Named {
//   Username: string;
//   Id = 1;
//   Name = 'Heineken';
// }

// function logName(x: Brand) {
//   console.log(x.Username);
// }

// logName({
//   Username: 'bobSolutions',
//   Id: 0,
//   Name: 'Bob',
// });
