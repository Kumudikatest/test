let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = function (request, response) {
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
        Source: 'kumudika@adroitlogic.com',
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });

    response.send({ "message": "Successfully executed" });
}