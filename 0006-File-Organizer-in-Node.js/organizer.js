const fs = require("fs");
const path = require("path");

const sourceDirectory = "./my-files";

// Create a function to get the file type (extension without dot)
const getFileType = (file) => {
  return file.split(".").pop().toLowerCase();
};

// Create a function to organize and rename files
const oganizeAndRenameFiles = () => {
  fs.readdir(sourceDirectory, (err, files) => {
    if (err) {
      console.log(`Error reading directory:`, err);
      return;
    }

    // Create subfolders for each file type
    const fileTypes = new Set(files.map(getFileType));

    fileTypes.forEach((file_type) => {
      const folderPath = path.join(sourceDirectory, file_type);

      if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
    });

    // Rename and move files to their respective subfolders
    files.forEach((file) => {
      const filePath = path.join(sourceDirectory, file);
      const fileType = getFileType(file);
      const newFileName = `${Date.now()}-${file}`;
      const newFilePath = path.join(sourceDirectory, fileType, newFileName);

      fs.rename(filePath, newFilePath, (err) => {
        if (err) {
          console.log(`Error renaming ${file}`, err);
        } else {
          console.log(`Renamed and moved ${file} to ${fileType} folder.`);
        }
      });
    });
  });
};

oganizeAndRenameFiles();
