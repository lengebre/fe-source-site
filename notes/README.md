
## Files uploading to S3

```bash
aws s3 cp {filename} s3://{bucketname}/
```

## Sync Directory to S3

```bash
aws s3 sync {foldername}/ s3://{bucketname}/
```