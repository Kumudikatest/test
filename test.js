let AWS = require('aws-sdk');
const eventBridge = new AWS.EventBridge();

exports.handler = function (request, response) {
    eventBridge.putEvents({
        Entries: [{
            EventBusName: "my-event-bus-udith",
            Source: "bv",
            DetailType: " nvn",
            Detail: "{}"
        }]
    }).promise()
        .then(data => {
            console.loh(data);
        })
        .catch(err => {
            // error handling goes here
        });

    response.send({ "message": "Successfully executed" });
}