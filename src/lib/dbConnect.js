const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.mongodb_URI;
export const collections = {
  CAMPAIGNS: "campaigns",
  USERS: "users",
  ABOUT: "about",
};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connect = (collection) => {
  const dbName = process.env.dbName;
  return client.db(dbName).collection(collection);
};
