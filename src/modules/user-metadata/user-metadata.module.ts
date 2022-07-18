import { Module } from '@nestjs/common';
import { UserMetadataService } from './user-metadata.service';
import { UserMetadataController } from './user-metadata.controller';

@Module({
  controllers: [UserMetadataController],
  providers: [UserMetadataService]
})
export class UserMetadataModule {}
