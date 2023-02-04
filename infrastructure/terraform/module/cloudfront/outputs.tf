output "cloud_identity_iam_arn" {
  description = "cloudfront iam_arn"
  value       = aws_cloudfront_origin_access_identity.cloud_identity.iam_arn
}