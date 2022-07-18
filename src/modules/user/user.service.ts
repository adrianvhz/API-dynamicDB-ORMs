import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { AppDataSource } from '../../../utils/db';

import { Response } from 'express';
import { join } from 'path';

const userRepository = AppDataSource.getRepository(User);

@Injectable()
export class UserService
{
  findAll() {
    return userRepository.find();
  }

  async findOne(id: number)
  {
    const user = await userRepository.findOneByOrFail({ id: id });

    if (!user)
    {
      return "user entered doesn't exist"
    }

    return user;
  }
  
  create(createUserDto: CreateUserDto)
  {
    const { username, password } = createUserDto;
    const user = new User();

    user.username = username;
    user.password = password;

    userRepository.save(user)

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto, response: Response)
  {
    const user = await userRepository.findOneBy({ id: id })
    if (!user)
    {
      return response.status(404).sendFile('user.html', { root: 'C:\\$Archivos\\nestjs\\dist\\src\\public' });
    }

    const { username, password } = updateUserDto;
    
    // parece que si una propiedad es undefined no cambia su valor (lo cual es bueno)
    user.username = username;
    user.password = password;

    await userRepository.save(user);

    return response.status(200).send(user);
  }

  async remove(id: number, response: Response)
  {
    const user = await userRepository.findOneBy({ id: id })

    if (!user)
    {
      return response.status(404).end("user entered doesn't exist");
    }

    await userRepository.delete(user);

    return response.status(204).end();
  }
}
