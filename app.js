const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const dotenv = require("dotenv/config");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    // const firstName = req.body.fName;

    const request = https.request(url, options, (response) => {

        //console.log(response.statusCode);
        if (response.statusCode === 200) {
            // res.send("Successfully subscribed");
            res.sendFile(__dirname + "/success.htm");
        } else {
            // res.send("Error with signing up, please try again!");
            res.sendFile(__dirname + "/failure.htm");
        }
        
        response.on("data", (data) => {
            //console.log(JSON.parse(data));
        })
    });
    request.write(jsonData);
    request.end();
});


// app.post("/failure", (req, res) => {
//     res.redirect("/");
// });

const portUsed = process.env.PORT || 3000; //heroku assigned port or port 3000

app.listen(portUsed, () => {
    console.log(`server is running on port ${portUsed}`);
});