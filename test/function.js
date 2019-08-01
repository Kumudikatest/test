let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function(request, response) {
     
        // You must always end/destroy the DB connection after it's used
        rds.beginTransaction({
            instanceIdentifier: 'k'
        },function (error,connection) {
            if (error) {
                throw error;
            }
            connection.end();
            
        });
    
    response.send({"message": "Successfully executed"});
}