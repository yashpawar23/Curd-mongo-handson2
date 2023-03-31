const {MongoClient}=require("mongodb")
const url="mongodb://127.0.0.1:27017"
const client= new MongoClient(url)

const insertToDB=async(data)=>{
    await client.connect();
    const database=client.db("student");
    const collection=database.collection("information");
    const dbResponse=await collection.insertOne(data);
    await client.close();
    return dbResponse;
}
const findInDB=async(data)=>{
    await client.connect();
    const database=client.db("student");
    const collection=database.collection("information");
    const dbResponse=await collection.findOne(data);
    await client.close();
    return dbResponse;
}

const updateInDB=async(filter,value)=>{
    await client.connect();
    const database=client.db("student")
    const collection=database.collection("information");
    const dbResponse=await collection.updateMany(filter,value)
    await client.close();
    return dbResponse;
}
const deleteInDB=async(data)=>{
    await client.connect();
    const database=client.db("student")
    const collection=database.collection("information");
    const dbResponse=await collection.deleteOne(data)
    await client.close();
    return dbResponse;
}

module.exports={
    insertToDB,
    findInDB,
    updateInDB,
    deleteInDB,
}