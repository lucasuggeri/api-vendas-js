import { MongoClient } from "mongodb";
import {UUID} from UUID;

class MongoConnector{
    constructor(config){
        this.database = config.db_database
        this.uri = `mongodb://${config.db_hostname}:${config.db_port}`
    }

    async run(collection){
        this.client = new MongoClient(this.uri,{
            useUnifiedTopology : true,
            pkFactory: {createPk: ()=> new UUID().toString()}
        })
        this.client.connect();
        this.collection = this.client.db(this.database).collection(collection);
    }
    async find(data){
        const [result] = await this.collection.find(data).toArray()
        return result;
    }
    async findAll(data){
        const [result] = await this.collection.find(data).toArray();
        return result;
    }
    async insert(data){
        return await this.collection.insertOne(data);

    }
    async remove(data){
        return await this.collection.deleteOne(data);
    }
    async update(data){
        return await this.collection.replaceOne(target, data);
    }
}

export default MongoConnector;
