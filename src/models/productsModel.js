import config from "../config/environment";
import databaseConnector from './databaseConnector.js'

const dbClient = new databaseConnector(config);

await dbClient.run('products');

export default dbClient;