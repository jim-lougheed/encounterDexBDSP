export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://encounterdex-back.herokuapp.com"
    : "http://localhost:8080";
