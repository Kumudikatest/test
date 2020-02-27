let AWS = require('aws-sdk');
const translate = new AWS.Translate();

exports.handler = async (event) => {
    translate.translateText({
        SourceLanguageCode: "auto",
        TargetLanguageCode: "zh",
        Text: "Tianjin"
    }).promise()
        .then(data => {
            // your code goes here
            console.log(data);
        })
        .catch(err => {
            // error handling goes here
        });

    return { "message": "Successfully executed" };
};