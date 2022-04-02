module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e68c467c5f1c46cb0bc9bd7133fc88e6'),
  },
});
