const pinejs = require("@resin/pinejs");
const express = require("express");
const getEdmMetaData= require("./edmx-reader").getEdmMetaData;
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser());
app.use((req, res, next) => {
  console.log("%s %s", req.method, req.url);
  next();
});
app.use("/edm-meta",(req,res)=>{
  getEdmMetaData(req, res);
});
pinejs.init(app).then(() => {
  app.listen(1337, () => {
    console.info("Server started");
  });
});
