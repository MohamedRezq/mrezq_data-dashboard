const APP_MODE = "LOCAL"; // "DEV" || "LOCAL";

export const App_Config = {
  APP_BASE_URL:
    APP_MODE === "LOCAL"
      ? process.env.NEXT_PUBLIC_FRONT_BASE_URL_LOCAL
      : process.env.NEXT_PUBLIC_FRONT_BASE_URL_DEV,
  API_BASE_URL:
    APP_MODE === "LOCAL"
      ? process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL
      : process.env.NEXT_PUBLIC_API_BASE_URL_DEV,
};

// Integrations
export const Integrations = {
  Quickbooks: {
    AUTH_URL: `${process.env.NEXT_PUBLIC_QUICKBOOKS_OAUTH_URL}?client_id=${process.env.NEXT_PUBLIC_QUICKBOOKS_CLIENT_ID}&response_type=code&scope=com.intuit.quickbooks.accounting&redirect_uri=${App_Config.APP_BASE_URL}${process.env.NEXT_PUBLIC_QUICKBOOKS_REDIRECT_URL}&state=security_token`,
  },
};

