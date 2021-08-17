const fs = require("fs");
const path = require("path");
const uploadFile = require("./aws");

const testUpload = () => {
  const filePath = path.resolve(__dirname, "download-test.jpeg");
  const fileStream = fs.createReadStream(filePath);
  const now = new Date();
  const fileName = `test-image-${now.toISOString()}.jpg`;
  uploadFile(fileStream, fileName)
    .then((response) => {
      console.log(":)");
      console.log("Successfully added");
      console.log(response);
    })
    .catch((err) => {
      console.log(":|"); 
      console.log(err);
    });
};

testUpload();
