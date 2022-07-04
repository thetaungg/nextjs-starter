export const siteURL =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
        ? process.env.NEXT_PUBLIC_SITE_URL_DEVELOPMENT
        : process.env.NEXT_PUBLIC_SITE_URL_PRODUCTION;

export const apiUrl =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
        ? process.env.NEXT_PUBLIC_API_DEVELOPMENT
        : process.env.NEXT_PUBLIC_API_PRODUCTION;
