import { lucia } from "$lib/server/auth";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get(lucia.sessionCookieName);

  // If no session cookie exists, clear locals and proceed
  if (!sessionId) {
    event.locals.user = null;
    event.locals.session = null;
    return resolve(event);
  }

  // Validate the session cookie
  const { session, user } = await lucia.validateSession(sessionId);

  // If session is fresh, create a new session cookie with extended expiration
  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes
    });
  }

  // If session is invalid (e.g., expired), create a blank cookie to remove the existing one
  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie();
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes
    });
  }

  // Make user and session data available on `event.locals`
  event.locals.user = user;
  event.locals.session = session;

  // Proceed with resolving the request
  return resolve(event);
};