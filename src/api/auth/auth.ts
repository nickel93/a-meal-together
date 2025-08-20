import NextAuth, { NextAuthOptions } from "next-auth";
import Kakao from "next-auth/providers/kakao";

export const authConfig = {
  providers: [
    Kakao({
      clientId:
        process.env.KAKAO_CLIENT_ID || "34678491f4ad828e79d6d36160c63fc1",
      clientSecret:
        process.env.KAKAO_CLIENT_SECRET || "8y9bP0KydIR5FQQD1bioht0FExCEZXx2",
    }),
  ],
  callbacks: {
    async redirect() {
      return "/onboarding";
    },
  },
} satisfies NextAuthOptions;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
