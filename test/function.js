let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (request, response) {
    ddb.get({
        TableName: 'BTMenu',
        Key: { 'itemCode': 'i' }
    }).promise()
        .then((data) => {
            //your logic goes here
        })
        .catch((err) => {
            //handle error
        });

    response.send({ "message": "Successfully executed" });
}