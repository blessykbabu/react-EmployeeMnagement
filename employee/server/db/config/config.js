module.exports=
{
  "development": {
    "database": {
      "url": process.env.MONGO_URL,
      "options": {
        "useNewUrlParser": true,
        "dbName":process.env.DB_NAME
      }
    }
  },
  "test": {
    "database": {
      "url": process.env.MONGO_URL,
      "options": {
        "useNewUrlParser": true,
        "dbName":process.env.DB_NAME
      }
    }
  },
  "production": {
    "database": {
      "url": process.env.MONGO_URL,
      "options": {
        "useNewUrlParser": true,
        "dbName":process.env.DB_NAME
      }
    }
  }
}
