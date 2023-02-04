output "s3_bucket_regional_domain_name" {
  description = "s3 bucket_regional_domain_name"
  value       = aws_s3_bucket.bucket.bucket_regional_domain_name
}