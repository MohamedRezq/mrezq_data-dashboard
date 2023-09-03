//--------------------------------------------------------//
//-----> DEFINE CONFIG ZONE <-----------------------------//
export const App_Config = {
  APP_BASE_URL: process.env.NEXT_PUBLIC_FRONT_BASE_URL,
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
};
//-----> Scopes <-----------------------------------------//
export const Scopes = {
  ZP_SCOPE: "scope=ZOHOPEOPLE.forms.all",
  ZB_SCOPE: "scope=ZohoBooks.fullaccess.all",
};
//-----> Integrations <-----------------------------------//
export const Integrations = {
  Quickbooks: {
    AUTH_URL: `${process.env.NEXT_PUBLIC_QUICKBOOKS_OAUTH_URL}?client_id=${process.env.NEXT_PUBLIC_QUICKBOOKS_CLIENT_ID}&response_type=code&scope=com.intuit.quickbooks.accounting&redirect_uri=${App_Config.APP_BASE_URL}${process.env.NEXT_PUBLIC_QUICKBOOKS_REDIRECT_URL}&state=security_token`,
  },
  Zohopeople: {
    AUTH_URL: `${process.env.NEXT_PUBLIC_ZOHO_OAUTH_URL}${Scopes.ZP_SCOPE}&client_id=${process.env.NEXT_PUBLIC_ZOHO_CLIENT_ID}&response_type=code&access_type=offline&prompt=consent&redirect_uri=${App_Config.APP_BASE_URL}${process.env.NEXT_PUBLIC_ZOHO_REDIRECT_URL}`,
  },
  Zohobooks: {
    AUTH_URL: `${process.env.NEXT_PUBLIC_ZOHO_OAUTH_URL}${Scopes.ZB_SCOPE}&client_id=${process.env.NEXT_PUBLIC_ZOHO_CLIENT_ID}&response_type=code&access_type=offline&prompt=consent&redirect_uri=${App_Config.APP_BASE_URL}${process.env.NEXT_PUBLIC_ZOHO_REDIRECT_URL}`,
  },
  Jira: {
    AUTH_URL: `/welcome/customize-access/login-helper/jira`,
  },
  Okta: {
    AUTH_URL: `/welcome/customize-access/login-helper/okta`,
  },
};
