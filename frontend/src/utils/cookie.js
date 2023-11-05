// utils/cookie.js

import Cookies from "js-cookie";

// Set a token cookie with a given name, value, and expiration (in minutes)
export function setTokenCookie(name, value, minutesToExpire) {
  Cookies.set(name, value, { expires: minutesToExpire / (24 * 60) }); // Convert minutes to days
}

// Get a token cookie by name
export function getTokenCookie(name) {
  return Cookies.get(name);
}

// Remove a token cookie by name
export function removeTokenCookie(name) {
  Cookies.remove(name);
}
