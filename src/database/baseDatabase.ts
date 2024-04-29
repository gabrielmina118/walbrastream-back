import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

export abstract class BaseDataBase {
    private static connection: Knex | null = null;

    protected getConnection(): Knex {
        if (!BaseDataBase.connection) {
            BaseDataBase.connection = knex({
                client: "mysql",
                connection: {
                    host: "localhost",
                    user: "root",
                    password: "password",
                    database: "walbraskem",
                    port: 3306,
                },
            });
        }

        return BaseDataBase.connection;
    }
}
