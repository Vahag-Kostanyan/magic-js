import { PoolConnection } from "mysql2/promise";
import MySQLConnection from "../connections/MySQLConnection"

abstract class migration {
    private connection: PoolConnection | null = null;

    private async initializeConnection(): Promise<void> {
        if (!this.connection) {
            const dbInstance = await MySQLConnection.getInstance();
            this.connection = await dbInstance.getConnection();
        }
    }
}

export default migration;