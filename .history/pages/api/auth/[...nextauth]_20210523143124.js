import  from "next-auth";
import Providers from "next-auth/providers";

export default ({
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});
jwt: {
  signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,

  // You can also specify a public key for verification if using public/private key (but private only is fine)
  // verificationKey: process.env.JWT_SIGNING_PUBLIC_KEY,

  // If you want to use some key format other than HS512 you can specify custom options to use
  // when verifying (note: verificationOptions should include a value for maxTokenAge as well).
  // verificationOptions = {
  //   maxTokenAge: `${maxAge}s`, // e.g. `${30 * 24 * 60 * 60}s` = 30 days
  //   algorithms: ['HS512']
  // },
}