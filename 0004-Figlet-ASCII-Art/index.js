const figlet = require("figlet");
const fs = require("fs");
require("colors");

const text = "The Code Dynamo";
const font = "Slant";
// const width = 100;

figlet.text(text, { font }, (err, data) => {
  if (err) {
    console.log("Something went wrong...");
    return;
  }

  console.log(data.bgRed.yellow);

  fs.writeFileSync("output.txt", data, "utf-8");
  console.log("Figlet output saved to 'output.txt'".bgMagenta.white);
});
