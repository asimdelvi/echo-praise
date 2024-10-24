import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/prisma-client";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
  // pages: {
  //   signIn: "/auth/signin",
  // },
  // callbacks: {
  //   authorized: async ({ auth, request }) => {
  //     console.log(auth);

  //     const isLoggedIn = !!auth?.user;
  //     const pathname = request.nextUrl.pathname;
  //     if (pathname === "/") return true;
  //     else {
  //       if (isLoggedIn) return true;
  //       return false;
  //     }
  //   },
  // },
});
