import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService, TestClass } from './app.service';
import { UserModule } from './modules/user/user.module';
import { UserMetadataModule } from './modules/user-metadata/user-metadata.module';

@Module({
  imports: [UserModule, UserMetadataModule],
  controllers: [],
  providers: [AppService, 
    {
      useFactory(...args) {
        return new TestClass(1000, 2000);
      },
      provide: TestClass,
    }
  ],
})
export class AppModule {}
