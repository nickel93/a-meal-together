import NextAuth, { NextAuthOptions } from "next-auth";
import Kakao from "next-auth/providers/kakao";

export const authConfig = {
  providers: [
    Kakao({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async redirect() {
      return "/onboarding";
    },
  },
} satisfies NextAuthOptions;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
