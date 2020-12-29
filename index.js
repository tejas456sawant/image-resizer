const fs = require("fs");
const sharp = require("sharp");

var source = "src";
var destination = "dest";

fs.readdirSync(source).forEach((file) => {
  sharp(source + "/" + file.toString())
    .webp()
    .toFile(destination + "/" + file.split(".")[0] + ".webp")
    .then((info) => {
      console.log(file);
    });
});
