const AWS = require("aws-sdk");

const AWS_BUCKET_NAME = "test-bucket";
const AWS_BUCKET_REGION = "us-east-1";
const AWS_ACCESS_KEY = "temp";
const AWS_SECRET_KEY = "temp";

const credentials = {
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
};

const useLocal = "http://localhost:4566";

const bucketName = AWS_BUCKET_NAME;

const s3client = new AWS.S3({
  credentials,
  endpoint: "http://localhost:4566",
  s3ForcePathStyle: true,
});

const uploadFile = async (data, fileName) =>
  new Promise((resolve) => {
    s3client.upload(
      {
        Bucket: AWS_BUCKET_NAME,
        Key: fileName,
        Body: data,
      },
      (err, response) => {
        if (err) throw err;
        resolve(response);
      }
    );
  });

module.exports = uploadFile;
