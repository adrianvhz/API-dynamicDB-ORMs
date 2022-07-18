import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) // o puedo poner el userService como una propiedad (como en .NET)
  {}

  @Post()
  create(@Body() createUserDto: CreateUserDto)
  {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll()
  {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string)
  {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  /**
   * @param { passthrough: boolean } in @Res decorator.
   * @if { passthrough: true } Se debe enviar la respuesta con el return de la funcion.
   * @if { passthrough: false } (default) Se debe enviar la respuesta con express method (response.[send, end, sendFile, etc])
   */
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Res({ passthrough: false }) response: Response)
  {
    return this.userService.update(+id, updateUserDto, response);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() response: Response) {
    return this.userService.remove(+id, response);
  }
}
