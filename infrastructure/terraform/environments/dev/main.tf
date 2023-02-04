terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  access_key = var.access_key
  secret_key = var.secret_key
  region     = "ap-northeast-1"
}

locals {
  bucket_name = "blog.test.com.terraform.bucket"
}

# S3にバケットを作成する
module "s3" {
  source                      = "../../module/s3"
  bucket_name                 = local.bucket_name
  bucket_tag                  = "blog.tocobird.com-tf-bucket-tag"
  cloudfront_identity_iam_arn = module.cloudfront.cloud_identity_iam_arn
}

# CloudFrontにディストリビューションを作成する
module "cloudfront" {
  source                         = "../../module/cloudfront"
  s3_bucket_regional_domain_name = module.s3.s3_bucket_regional_domain_name
}
