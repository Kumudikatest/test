let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (request, response) {
    sns.getTopicAttributes({
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    response.send({ "message": "Successfully executed" });
}