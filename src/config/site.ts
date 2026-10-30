// Single place to configure where the landing page sends visitors.
// Set VITE_APP_URL to the Tattoo Studio Pro app origin (e.g. https://app.yourdomain.com).
const APP_URL = (import.meta.env["VITE_APP_URL"] as string | undefined)?.replace(/\/$/, "") ?? "";

export const site = {
  appUrl: APP_URL,
  signupUrl: (import.meta.env["VITE_SIGNUP_URL"] as string | undefined) ?? `${APP_URL}/signup`,
  loginUrl: (import.meta.env["VITE_LOGIN_URL"] as string | undefined) ?? `${APP_URL}/login`,
  plansUrl: (import.meta.env["VITE_PLANS_URL"] as string | undefined) ?? `${APP_URL}/signup`,
  supportHref: "mailto:ritechsolution2025@gmail.com?subject=InkFlow%20Studio%20support",
  // Leave empty until real pages exist; footer hides empty links.
  privacyUrl: (import.meta.env["VITE_PRIVACY_URL"] as string | undefined) ?? "",
  termsUrl: (import.meta.env["VITE_TERMS_URL"] as string | undefined) ?? "",
};
