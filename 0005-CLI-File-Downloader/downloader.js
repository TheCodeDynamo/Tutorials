const axios = require("axios");
const inquirer = require("inquirer");
const ora = require("ora");
const fs = require("fs");
require("colors");

const downloadFile = async (url, fileName) => {
  const spinner = ora("Downloading... 0.00%");

  try {
    const response = await axios.get(url, { responseType: "stream" });

    const totalSizeBytes = parseInt(response.headers["content-length"], 10);
    const totalSizeMB = (totalSizeBytes / (1024 * 1024)).toFixed(2);

    if (isNaN(totalSizeBytes))
      return console.log(`Error: Invalid URL!`.bgRed.white);

    // Display the total size before the spinner
    const fileSizeText = `${totalSizeMB} MB`.yellow;
    console.log(`Total Size: ${fileSizeText}`.green);

    const writer = fs.createWriteStream(fileName);
    spinner.start();

    let downloadedSize = 0;

    response.data.on("data", (chunk) => {
      writer.write(chunk);
      downloadedSize += chunk.length;

      // Calculate and display download progress percentage in front of the spinner
      const progressPercent = ((downloadedSize / totalSizeBytes) * 100).toFixed(
        2
      );

      spinner.text = `Downloading ${progressPercent.blue}%`;
    });

    response.data.on("end", () => {
      writer.end();
      spinner.succeed(`Download completed. Saved as ${fileName.green}`.blue);
      process.exit(); // Exit the app after download completion
    });
  } catch (error) {
    if (error === "ECONNREFUSED" || error.code === "ENOTFOUND") {
      spinner.fail(
        "Error: Connection failed. Please check the URL and try again.".bgRed
          .white
      );
    } else {
      spinner.fail(`Error: ${error.message}`.bgRed.white);
    }
  }
};

const promptUserForDownloadInfo = async () => {
  const questions = [
    {
      type: "input",
      name: "url",
      message: "Enter the URL of the file to download:",
    },
    {
      type: "input",
      name: "fileName",
      message: "Enter the name for the downloaded file (with extension):",
    },
  ];

  const answers = await inquirer.prompt(questions);
  const { url, fileName } = answers;

  downloadFile(url, fileName);
};

promptUserForDownloadInfo();
