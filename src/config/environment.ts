const db_url = process.env.MONGODB_URI || "mongodb://localhost:27017/example_db";

export default {
  server: {
    port: process.env.PORT || 3000 
  },
  db: {
    url: db_url 
  },
  secret: 'secret'
};