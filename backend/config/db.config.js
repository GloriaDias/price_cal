const db = process.env.PGDATABASE || "UnionArtSchool";
const host = process.env.PGHOST || "127.0.0.1";
const password = process.env.PGPASSWORD || "root";
const user = process.env.PGUSER || "root";
module.exports = {
    HOST: host,
    USER: user,
    PASSWORD: password,
    DB: db,
    dialect: "postgres",
    port: 5432,
    pool: {
      max: 50,
      min: 0, 
      acquire: 30000,
      idle: 10000
    }
  };