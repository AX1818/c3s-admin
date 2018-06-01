import AWS from "aws-sdk";

const albumBucketName = "c3s-upload-temp-bucket";
const bucketRegion = "ap-southeast-2";
const IdentityPoolId = "ap-southeast-2:f1d18d55-ad5f-4428-9054-4fa94be2f433";

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId
  })
});

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName }
});

export function addPhoto(file) {
  const fileName = file.name;

  const photoKey = fileName;
  return new Promise((resolve, reject) => {
    s3.upload(
      {
        Key: photoKey,
        Body: file,
        ACL: "public-read"
      },
      (err, data) => {
        if (err) {
          console.log(`err: ${JSON.stringify(err, null, 2)}`);
          reject(err);
        } else {
          // console.log(`data: ${JSON.stringify(data, null, 2)}`);
          resolve(data);
        }
      }
    );
  });
}

export default s3;
