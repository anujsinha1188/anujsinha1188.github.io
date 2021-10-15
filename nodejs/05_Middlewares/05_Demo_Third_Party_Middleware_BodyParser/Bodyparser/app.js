const express = require("express");
//const bodyparser = require("body-parser");
const myReqLogger = require("./Utilities/RequestLogger");
const route = require("./Routes/routing");

const app = express();
//app.use(bodyparser.json());
//app.use(bodyparser.urlencoded({ extended: true }));
app.use(myReqLogger);
app.use("/", route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
