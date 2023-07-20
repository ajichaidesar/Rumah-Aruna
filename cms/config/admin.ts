export default ({ env }) => ({
  auth: {
    secret: env('tobemodified'),
  },
  apiToken: {
    salt: env('tobemodified'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
