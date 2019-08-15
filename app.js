const MongoClient = require("mongodb").MongoClient;
const CONNECTION_URL = "mongodb+srv://vicius:Gr@(&10021982@minha-clinica-vyxut.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "minha-clinica";
MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
       if(error) {
           throw error;
       }
       database = client.db(DATABASE_NAME);
       collection = database.collection("people");
       console.log("Connected to `" + DATABASE_NAME + "`!");
   });
