let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.listSubscriptionsByTopic({
            TopicArn: "arn:aws:sns:us-east-1:318300609668:New"
        }).promise();
    console.log(data);
    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};