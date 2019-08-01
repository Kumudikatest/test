let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();

exports.handler = function (request, response) {
    kinesis.describeStream({
        StreamName: 'testindunil'
    }).promise()
        .then(data => {
            // your logic goes here
        })
        .catch(err => {
            // error handling goes here
        });

    response.send({ "message": "Successfully executed" });
}