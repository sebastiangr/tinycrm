// src/lib/server/auth.ts
import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { dev } from "$app/environment";

const client = new PrismaClient();

const adapter = new PrismaAdapter(client.session, client.user);

// import { Lucia } from "lucia"; // Updated to use the correct named export
// // import { sveltekit } from "lucia/middleware"; // Ensure this path is correct
// import { prisma as prismaAdapter } from "@lucia-auth/adapter-prisma"; // Updated to use the correct named export
// import { PrismaClient } from "@prisma/client";
// import { sveltekit } from "@sveltejs/kit/vite";

// const client = new PrismaClient();

// export const auth = new Lucia({
//   adapter: prismaAdapter(client), // Updated to use the correct adapter
//   env: import.meta.env.DEV ? "DEV" : "PROD",
//   middleware: sveltekit(),

//   getUserAttributes: (data: { username: string; email: string; role: string; }) => {
//     return {
//       username: data.username,
//       email: data.email,
//       role: data.role
//     };
//   }
// });

// export type Auth = typeof auth;