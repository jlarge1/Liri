// node js things
require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var keys = require("./keys");
var request = require("request");
var fs = require("fs");


//twitter and spoitfy keys
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//user input
var a = process.argv;
var userCommand = a[2];
var userInput = a[3];

//functions
function myTweets() {
    client.get("statuses/home_timeline", { count: 20 }, function (error, tweets, response) {
        if (error) throw error;
        for (i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
            console.log(tweets[i].created_at);
            console.log("======================");
        }
    });
};

function spotifySong(song) {
    spotify.search({ type: 'track', query: song }, function (err, data, response) {
        if (err) {
            console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0]);
    });
}

function 

if (userCommand == "do-what-it-says" )  {
    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");

        userCommand = dataArr[0];
        userInput = dataArr[1];
        console.log(userCommand);
    });
    
} 

switch (userCommand) {    
    case "my-tweets":
        myTweets();
        break;
    case "spotify-this-song":
        spotifySong(userInput);
        break;
    case "movie-this":

        if (userInput) {
            var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

            request(queryUrl, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    var obj = JSON.parse(body);
                    console.log("Title: " + obj.Title);
                    console.log("Year: " + obj.Year);
                    console.log("IMDB Rating: " + obj.imdbRating);
                    console.log("Rotten Tomatoes Rating: " + obj.Ratings[1].Value);
                    console.log("Country: " + obj.Country);
                    console.log("Language: " + obj.Language);
                    console.log("Plot: " + obj.Plot);
                    console.log("Actors: " + obj.Actors);
                }
            });
        } else {
            var queryUrl = "http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=trilogy";

            request(queryUrl, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    var obj = JSON.parse(body);
                    console.log("Title: " + obj.Title);
                    console.log("Year: " + obj.Year);
                    console.log("IMDB Rating: " + obj.imdbRating);
                    console.log("Rotten Tomatoes Rating: " + obj.Ratings[1].Value);
                    console.log("Country: " + obj.Country);
                    console.log("Language: " + obj.Language);
                    console.log("Plot: " + obj.Plot);
                    console.log("Actors: " + obj.Actors);
                }
            });
        }

        break;
    default:
        console.log("liri accepts the following commands: my-tweets, spotify-this-song, movie-this, do-what-it-says")
}





// spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
//     if (err) {
//         return console.log('Error occurred: ' + err);
//     }

//     console.log(data);
// });



