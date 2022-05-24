/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL_SERVICE_ID: "service_prf4mbk",
    EMAIL_TEMPLATE_ID: "template_28t8ue8",
    EMAIL_PUBLIC_KEY: "Ej6y-aM8BkF4Ng4vG",
    NASA_API_KEY: "ngJLaiFA86bqBre36FBM6sXZVE3O04BlQL4Ulnma",
  },
  images: {
    domains: ["apod.nasa.gov"],
  },
};

module.exports = nextConfig;
