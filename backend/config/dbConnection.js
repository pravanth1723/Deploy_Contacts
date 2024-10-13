const mongoose=require('mongoose');

const connectDb=async()=>{
    try{
        const connect=await mongoose.connect('mongodb+srv://Admin:Mongodb1723@pravanthcluster.9qcjv24.mongodb.net/contactsBackend?retryWrites=true&w=majority&appName=pravanthCluster')
        console.log('DB connected',
            connect.connection.host,
            connect.connection.name
        );
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
};
module.exports=connectDb;
