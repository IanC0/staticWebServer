const express = require("express");
const app = express(); // anytime app is called run the express method with whatever we have passed it. Also app has access to internal methods of express

// app.use adding something to the app (end point or middleware or function etc) 
app.use("/static", express.static("public"));

// what port to listen to 
app.listen(5001, () => {
    console.log("listening on port 5001");
})