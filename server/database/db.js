import mongoose from "mongoose";



const DBConnection = async () => {
    // const USERNAME = 'adarshsingh';
    // const PASSWORD = 'Adarsh9060'

    //const MONGO_URI = "mongodb://adarshsingh:Adarsh9060@@ac-j82cyvr-shard-00-00.ck1ryn0.mongodb.net:27017,ac-j82cyvr-shard-00-01.ck1ryn0.mongodb.net:27017,ac-j82cyvr-shard-00-02.ck1ryn0.mongodb.net:27017/?ssl=true&replicaSet=atlas-k3ax8h-shard-0&authSource=admin&retryWrites=true&w=majority";
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test", 
        { useNewUrlParser: true , 
          useUnifiedTopology: true
    });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }   
}

export default DBConnection;