module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["sdfg"] = {
        host: process.env.EndPoint_rdsSdfg,
        port: process.env.Port_rdsSdfg,
        user: process.env.User_rdsSdfg,
        password: process.env.Password_rdsSdfg,
        database: "wert"
    };
};