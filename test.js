let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
var common = require('./common');

exports.handler = async (event) => {
    //common.func1();
    console.log(common);
    try {
        let data = await cognito_idp.listUsers({
            UserPoolId: process.env.UserPoolId_cognitol,
            Limit: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};