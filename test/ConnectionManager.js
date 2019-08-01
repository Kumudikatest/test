module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["k"] = {
        host: "k.czndmdv7dw6d.us-east-1.rds.amazonaws.com",
        port: "1234",
        user: "k",
        password: process.env.Password_rdsK,
        database: "k"
    };
};