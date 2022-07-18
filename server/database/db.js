import mongoose from "mongoose"


const Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-l685q6j-shard-00-00.hz6amtn.mongodb.net:27017,ac-l685q6j-shard-00-01.hz6amtn.mongodb.net:27017,ac-l685q6j-shard-00-02.hz6amtn.mongodb.net:27017/?ssl=true&replicaSet=atlas-asqqim-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{

       await mongoose.connect(URL, {useNewUrlParser:true})
       console.log("Database got connected successfully")

    }
    catch(error){
        console.log("error while connecting with database" ,error )
    }
}

export default Connection;