const getDomainUrl = () => {
  let port = "";

  if (process.env.NEXT_PUBLIC_BACKEND_PORT) {
    port = `:${process.env.NEXT_PUBLIC_BACKEND_PORT}`;
  }

  return `${process.env.NEXT_PUBLIC_BACKEND_SECURE}://${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}${port}`;
};

export const APP_ENV = {
  APP_NAME: "VZZ Brokerage",
  DEFAULT_THEME: "light",
  BACKEND_BASE: getDomainUrl(),
  BACKEND_URL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
  FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
  // APP_EMAIL: "verlasellshomes@gmail.com",
  APP_EMAIL: "cliffordteng5@gmail.com"
};
