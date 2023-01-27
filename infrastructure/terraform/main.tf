variable "access_key" {
  description = "aws access key"
  type        = string
}
variable "secret_key" {
  description = "aws secret key"
  type        = string
}

provider "aws" {
  access_key = var.access_key
  secret_key = var.secret_key
  region     = "asia-northeast1"
}

locals {
  region      = "ap-northeast-1"
  bucket_name = "test_tf_bucket"
}

# S3にバケットを作成する
module "s3" {
  source      = "./module/s3"
  bucket_name = local.bucket_name
  bucket_tag  = "test_tf_bucket_tag"
}

# CloudFrontにバケットを作成する
module "cloudfront" {
  source      = "./module/cloudfront"
  domain_name = "${local.bucket_name}.s3.${local.region}.amazonaws.com"
}
