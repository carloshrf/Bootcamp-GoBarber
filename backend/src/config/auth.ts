export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default', // vaibarbeiro
    expiresIn: '1d',
  },
};
