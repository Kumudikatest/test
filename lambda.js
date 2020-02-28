let AWS = require('aws-sdk');
const translate = new AWS.Translate();

exports.handler = async (event) => {
    try {
        let data = await translate.translateText({
            SourceLanguageCode: "auto",
            TargetLanguageCode: "fr",
            Text: "Hi"
        }).promise();
        console.log(data);

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};