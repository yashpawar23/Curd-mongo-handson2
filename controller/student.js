const mongoClient=require("../database/connection")
const studentEnrollment = async (req,res)=>{
    const studentData=req.body
    try{
        const result = await mongoClient.insertToDB(studentData);
        console.log("The result of database operation=>",result)
        return res.status(200).send(result)
    }catch(error){
        console.log("something went wrong")
        return res.status(500).send({message:"something wrong in insert"})
    }
}
const showStudent = async (req,res)=>{
    const queryParams=req.query;
    console.log(queryParams)
    try{
        const result = await mongoClient.findInDB(queryParams);
        console.log("The result of database operation=>",result)
        return res.status(200).send(result)
    }catch(error){
        console.log("something went wrong")
        return res.status(500).send({message:"something wrong in find"})
    }
}

const updateStudent=async (req,res)=>{
    const updateData=req.body
    // const updateQuery={"class":{"$set":"BCA"}}
    const updateFilter=updateData.filter
    const updateValue=updateData.value
    const value={$set:updateValue}
    try{
        const result=await mongoClient.updateInDB(updateFilter,value);
        return res.status(200).send(result)
    }catch(error){
        return res.status(500).send({message:"something wrong in update"})
    }
}
const deleteStudent=async (req,res)=>{
    const deleteQuery={company:"eee"}
    try{
        const result=await mongoClient.deleteInDB(deleteQuery);
        return res.status(200).send(result)
    }catch(error){
        res.status(500).send({message:"something wrong in delete"})
    }
}



module.exports={
    studentEnrollment,
    showStudent,
    updateStudent,
    deleteStudent,
}