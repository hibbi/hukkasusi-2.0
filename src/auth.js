import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "password",
      credentials: {
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, _request) {
        if (credentials?.password === process.env.NEXTAUTH_PASSWORD) {
          return { id: "0" };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
};
