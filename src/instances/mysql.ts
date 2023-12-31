import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_user as string,
    process.env.MYSQL_PASSORD as string,
    {
        dialect:'mysql',
        port:parseInt(process.env.MYSQL_PORT as string)
    }
)