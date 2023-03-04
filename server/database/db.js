import mongoose, { mongo } from "mongoose";

const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@freecluster0.ivqqsjq.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Databse connected successfully');
    }
    catch(error){
         console.log(`Error while connecting with the database`, error);
    }
}

export default Connection;