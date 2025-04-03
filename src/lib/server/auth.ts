// src/lib/server/auth.ts
import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { dev } from "$app/environment";

// Instantiate Prisma Client
const client = new PrismaClient();

// Instantiate Prisma Adapter
const adapter = new PrismaAdapter(client.session, client.user);

// Instantiate Lucia
export const lucia = new Lucia(adapter, {
  sessionCookie: {
      attributes: {
          // set to `true` when using HTTPS
          secure: !dev // Use secure cookies in production
      }
  },
  // Define what user data is available in the Session object
  getUserAttributes: (attributes) => {
      return {
          userId: attributes.id, // Include the user ID
          username: attributes.username,
          email: attributes.email,
          role: attributes.role
      };
  },
  // Define what session data is available (optional)
  // getSessionAttributes: (attributes) => {
  //  return {};
  // }
});

// IMPORTANT! Define types for Lucia user and session
// This ensures type safety across your application
declare module "lucia" {
  interface Register {
      Lucia: typeof lucia;
      // DatabaseUserAttributes must match the properties returned by getUserAttributes
      DatabaseUserAttributes: DatabaseUserAttributes;
      // DatabaseSessionAttributes can be defined if needed via getSessionAttributes
      // DatabaseSessionAttributes: DatabaseSessionAttributes;
  }
}

interface DatabaseUserAttributes {
  id: string;
  username: string;
  email: string;
  role: string;
}

// You can also export the prisma client if needed elsewhere
export const prisma = client;