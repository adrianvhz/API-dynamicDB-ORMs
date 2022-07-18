import { Injectable } from '@nestjs/common';
import { CreateUserMetadatumDto } from './dto/create-user-metadatum.dto';
import { UpdateUserMetadatumDto } from './dto/update-user-metadatum.dto';

import { UserMetadata } from './entities/user-metadata.entity';
import { AppDataSource } from 'utils/db';
import { User } from '../user/entities/user.entity';

@Injectable()
export class UserMetadataService
{
  async create(createUserMetadatumDto: CreateUserMetadatumDto)
  {
    const { name, age, userId } = createUserMetadatumDto;
    const user = await AppDataSource.manager.findOneBy(User, { id: userId });

    if (!user)
    {
      return 'user no existe'
    }
    return await UserMetadata.create({ name, age, user }).save();
  }

  findAll()
  {
    const users = UserMetadata.find({relations: {user: true}})
    users.then(res => console.log(res))
    return users;
  }

  findOne(id: number)
  {
    return `This action returns a #${id} userMetadatum`;
  }

  update(id: number, updateUserMetadatumDto: UpdateUserMetadatumDto)
  {
    return `This action updates a #${id} userMetadatum`;
  }

  remove(id: number)
  {
    UserMetadata.findOneBy({ id }).then(res => {
      res.remove();
    })
    return 'done'
  }

  findOneByName(name: string)
  {
    return UserMetadata.findOneByName(name);
  }
}
