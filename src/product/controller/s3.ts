import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable } from '@nestjs/common';

export const s3Client = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_PUBLIC_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

export interface UploadAdacter {
  upload(image: Express.Multer.File): Promise<string>;
}

@Injectable()
export class UploadFiles implements UploadAdacter {
  async upload(image: Express.Multer.File): Promise<string> {
    const awsBucketName = process.env.AWS_BUCKET_NAME;
    const command = new PutObjectCommand({
      Bucket: awsBucketName,
      Key: image.originalname,
      Body: image.buffer,
    });

    await s3Client.send(command);

    const getCommand = new GetObjectCommand({
      Bucket: awsBucketName,
      Key: image.originalname,
      ResponseContentDisposition: 'inline',
    });
    const imageUrl = await getSignedUrl(s3Client, getCommand);

    return imageUrl;
  }
}
