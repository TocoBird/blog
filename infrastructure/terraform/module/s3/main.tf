resource "aws_s3_bucket" "bucket" {
  bucket = var.bucket_name

  tags = {
    Name = var.bucket_tag
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_another" {
  bucket = aws_s3_bucket.bucket.id
  policy = data.aws_iam_policy_document.iam_bucket.json
}

resource "aws_s3_bucket_acl" "bucket_acl" {
  bucket = var.bucket_name
  acl    = "private"
}

data "aws_iam_policy_document" "iam_bucket" {
  statement {
    sid    = "1"
    effect = "Allow"

    principals {
      type        = "AWS"
      identifiers = [var.cloudfront_identity_iam_arn]
    }
    actions = [
      "s3:GetObject"
    ]
    resources = [
      "arn:aws:s3:::${var.bucket_name}/*"
    ]
  }
}

resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
