let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {
    cognito_idp.listUsers({
        UserPoolId: process.env.UserPoolId_cognitoUnnamed,
        Limit: 10
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            console.log(error);
            throw error;
        } else { 
           console.log(data);
       }
        // your logic goes within this block
    });

    callback(null, { "message": "Successfully executed" });
}