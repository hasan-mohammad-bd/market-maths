export const API_URL = "https://mmm.techtsy.tech/api/user/";
export const API_URL_WEBSITE = "https://mmm.techtsy.tech/api/website/";
export const ACCESS_TOKEN = (
  JSON.parse(localStorage.getItem("market-maths-user-data")) || {}
).token;

export const Language = "en";