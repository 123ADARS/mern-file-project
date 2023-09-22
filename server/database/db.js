import mongoose from "mongoose"
const DBConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://user2000:123test@project-ecommerce.v1eswgy.mongodb.net/project-ecommerce",
        { useNewUrlParser: true , 
          useUnifiedTopology: true
    });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }   
}

export default DBConnection;