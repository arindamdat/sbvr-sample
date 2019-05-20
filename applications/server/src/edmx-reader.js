const axios = require("axios").default;
const convert = require("edmx-reader").convert;
const Readable = require("stream").Readable;
const createReadStream = require("fs").createReadStream;
const path = require("path");
function getStream(input) {
  const stream = new Readable();
  stream.push(input);
  stream.push(null);
  return stream;
}
function getMetadata(req, res) {
  const apiRoot = req.query.apiRoot;
  // convert(request(`http://localhost:1337/${apiRoot}/$metadata`))
  //  .then(schema=>{
  //      res.send(JSON.stringify(schema));
  //  });
  // axios.get(`http://localhost:1337/${apiRoot}/$metadata`)
  // .then((metaresp)=>{
  //     let sanitized=metaresp.data.toString("utf8").replace("/\r?\n|\r/g|\r?\t|\n|\t","");
  //     sanitized= sanitized.replace("\ufeff","");
  //     console.log(sanitized);
  //     convert(sanitized)
  //     .then(schema=>{
  //         res.send(JSON.stringify(schema));
  //     });
  // });
  convert(createReadStream(path.join(__dirname, "edmx.xml"))).then(schema => {
    console.log(schema);
    res.send(JSON.stringify(schema));
  });
}
module.exports = {
  getEdmMetaData: getMetadata
};
