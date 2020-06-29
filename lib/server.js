//getting express
import express from "express";

//getting configuration file
import config from "./config";

import serverRender from "renderers/server"; //importing server render
import { data } from "./temp-data/temp-data.json";
const app = express();

app.use(express.static("public"));
// using express static middleware to serve the public directory , anything we put inside the public directory will be directly
// served also known as static directory

app.set("view engine", "ejs");
// configuring express to use ejs as template language

// '/' end point  and doing req,res callback
app.get("/", async (req, res) => {
  const initialContent = await serverRender();
  //rendering content from server aka initial content render
  res.render("index", { ...initialContent });
});

app.get("/data", (req, res) => {
  res.send(data);
});

//listening to port to render the express application
app.listen(config.port, function listenHandler() {
  console.info(
    `Server running in port ${config.port} , now changes reloading....`
  );
});
