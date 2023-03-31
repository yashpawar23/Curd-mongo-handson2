const express=require("express")
const app=express()
const body=require("body-parser")
const dotenv=require("dotenv")
dotenv.config()
const PORT=6000
const studentRouter=require("./routes/student")
app.use(body.json())
app.use("/",studentRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${PORT}`)
})