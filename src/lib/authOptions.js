import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { collections, connect } from "./dbConnect";
import bcrypt from "bcryptjs";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Email and Password",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your Email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials;
        const user = await connect(collections.USERS).findOne({ email });
        if (!user) {
          throw new Error("User not found!! Please Register.");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error("Incorrect password");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      },
    }),
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (account.provider === "google") {
          const isAxist = await connect(collections.USERS).findOne({
            email: user.email,
          });
          const payload = {
            ...user,
            provider: account.provider,
            providerId: account.providerAccountId,
            createdAt: new Date().toISOString(),
            role: "user",
          };

          if (!isAxist) {
            await connect(collections.USERS).insertOne(payload);
          }
        }

        return true;
      } catch (error) {
        return false;
      }
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    async session({ session, token, user }) {
      if (token) {
        session.email = token.email;
        session.role = token.role;
        session.name = token.name;
        session.id = token.id;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        const loginUser = await connect(collections.USERS).findOne({
          email: user.email,
        });
        token.email = loginUser.email;
        token.role = loginUser.role;
        token.name = loginUser.name;
        token.id = loginUser._id.toString();
      }

      return token;
    },
  },
};
