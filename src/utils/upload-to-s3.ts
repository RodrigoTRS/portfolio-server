import { Upload } from "@aws-sdk/lib-storage";
import { S3 } from "@aws-sdk/client-s3";
import { env } from "../env";

const client = new S3({ region: "us-east-2" });

interface UploadToS3Params {
  name: string;
  content: File;
}

export async function uploadToS3({ name, content }: UploadToS3Params) {
  await new Upload({
    client,
    params: {
      Bucket: env.AWS_S3_BUCKET_NAME,
      Key: name,
      Body: content,
    },
  }).done();
}
