module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  "cron": {
    "enabled": true
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '07dc448c961f324542ec5429a842bbe9'),
    },
  },
});
