import { DataSource } from 'typeorm';

import { User } from 'src/modules/user/entities/user.entity';
import { UserMetadata } from 'src/modules/user-metadata/entities/user-metadata.entity';

// eslint-disable-next-line
export const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgres://mofpzfba:41woYZfvHF_GfvcrWHcCJ5A7bJG6SlJh@batyr.db.elephantsql.com/mofpzfba",
    entities: [User, UserMetadata],
    synchronize: true, logger: 'simple-console', logging: ['info', 'error']
})

export default async function connectDb(): Promise<DataSource>
{
    try
    {
        await AppDataSource.initialize();
        console.log('Database connected!')
        return AppDataSource
    }
    catch(e)
    {
        console.error(e)
        process.exit(1)
    }
}
