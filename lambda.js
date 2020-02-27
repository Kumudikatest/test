let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    ses.sendEmail({
        Destination: {
            ToAddresses: ['kumudika@adroitlogic.com'],
            CcAddresses: [],
            BccAddresses: []
        },
        Message: {
            Body: {
                Text: {
                    Data: ``
                }
            },
            Subject: {
                Data: 'Test'
            }
        },
        Source: 'kumudika+syd@adroitlogic.com',
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });

    return { "message": "Successfully executed" };
};