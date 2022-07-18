import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserMetadataService } from './user-metadata.service';
import { CreateUserMetadatumDto } from './dto/create-user-metadatum.dto';
import { UpdateUserMetadatumDto } from './dto/update-user-metadatum.dto';

@Controller('user-metadata')
export class UserMetadataController {
  constructor(private readonly userMetadataService: UserMetadataService) {}

  @Post()
  create(@Body() createUserMetadatumDto: CreateUserMetadatumDto) {
    return this.userMetadataService.create(createUserMetadatumDto);
  }

  @Get()
  findAll() {
    return this.userMetadataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userMetadataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserMetadatumDto: UpdateUserMetadatumDto) {
    return this.userMetadataService.update(+id, updateUserMetadatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userMetadataService.remove(+id);
  }

  @Get('name/:name')
  findOneByName(@Param('name') name: string )
  {
    return this.userMetadataService.findOneByName(name);
  }
}
