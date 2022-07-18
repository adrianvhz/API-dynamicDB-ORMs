import { PartialType } from '@nestjs/mapped-types';
import { CreateUserMetadatumDto } from './create-user-metadatum.dto';

export class UpdateUserMetadatumDto extends PartialType(CreateUserMetadatumDto)
{
    constructor()
    {
        super();
    }
}
