let SL_REDIS = require('slappforge-sdk-redis');
let clusterManager = require('./ClusterManager');
const redis = new SL_REDIS.Redis(clusterManager);

exports.handler = function (request, response) {
    // You must always quit the redis client after it's used
    redis.sinterstore({
        clusterIdentifier: 'k1234567890123456789',
        params: [{
            key: '2',
            values: ['2']
        }]
    }, function (error, response, redisClient) {
        if (error) {
            callback(error);
        } else {
            redisClient.quit();
        }
    });

    response.send({ "message": "Successfully executed" });
}