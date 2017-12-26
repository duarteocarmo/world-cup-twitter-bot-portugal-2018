var request = require("request");
var url = "https://www.football-data.org/v1/competitions";
var reponse = {};

request ({
  url: url, 
  json: true
}, function (error, response, body){
  if(!error && response.statusCode == 200){
    return body;
  }
})

console.log(body);
