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
            console.log(err);
        });

    response.send({ "message": "Success" });
}