variable "bucket_name" {
  description = "aws s3 bucket name"
  type        = string
}
variable "bucket_tag" {
  description = "aws s3 bucket tag"
  type        = string
}
variable "cloudfront_identity_iam_arn" {
  description = "cloudfront identity iam arn"
  type        = string
}
