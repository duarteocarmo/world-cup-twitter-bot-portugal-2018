var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

function tweet_this(text){
    var tweet = {
        status: text
    }
    function tweeted(err, data, response) {
        if (err) {
            console.log('Something went wrong: ' + err['message']);
        } else {
            console.log('Success');
        }
    }
    T.post('statuses/update', tweet, tweeted); 
}
