variable "bucket_name" {
  description = "aws s3 bucket name"
  type        = string
}
variable "bucket_tag" {
  description = "aws s3 bucket tag"
  type        = string
}

resource "aws_s3_bucket" "bucket" {
  bucket = var.bucket_name

  tags = {
    Name = var.bucket_tag
  }
}

resource "aws_s3_bucket_acl" "b_acl" {
  bucket = var.bucket_name
  acl    = "private"
}