// const mongoose = require("mongoose");

// mongoose.set("strictQuery", true);

// // Debugging: Log the MONGOURL value
// //console.log("MONGOURL:", process.env.MONGOURL);

// if (!process.env.MONGOURL || process.env.MONGOURL === "") {
//   console.error("MONGOURL is not defined or is empty");
//   throw new Error("MONGOURL environment variable is not defined");
// }

// const connection = mongoose.connect(process.env.MONGOURL);

// module.exports = { connection };

const mongoose = require ('mongoose');
require('dotenv').config();

const connection = async  ()=>{

try { 
    await 
    mongoose.connect(process.env.MONGO_URL,  {
        userNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000,
    });
    console.log('mongodb connected successfully');
    
} catch (error) {console.error('mongodb connecrion failed:',error.message);
    process.exit(1);
    
}

};

module.exports = {connection

};