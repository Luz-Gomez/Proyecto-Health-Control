const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "healthcontrol";
DB_URI=`mongodb+srv://LuzAracely:Backend6543@cluster0.cpbiw.mongodb.net/HealthControl?retryWrites=true&w=majority`

exports.mongoConnect = () => {

    // Para conexion local
    //const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    //mongoose.connect(mongoStringConnection);

    // Para conexion remota con MongoAtlas
    mongoose.connect(DB_URI);
    
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind
    (console,"Mongodb connection error"))
}
