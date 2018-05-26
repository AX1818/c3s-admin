import AWS from "aws-sdk";

const albumBucketName = "c3s-upload-bucket";
const bucketRegion = "us-east-2";
const IdentityPoolId = "us-east-2:c29c7d71-b4c4-4334-9a5e-dcc7d65fc288";

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
  const albumPhotosKey = `photos/`;

  const photoKey = albumPhotosKey + fileName;
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
