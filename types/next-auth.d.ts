import "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    twitterId?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    twitterId?: string;
  }
}
