/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EMAIL_SERVICE_ID: "service_prf4mbk",
    EMAIL_TEMPLATE_ID: "template_28t8ue8",
    EMAIL_PUBLIC_KEY: "Ej6y-aM8BkF4Ng4vG",
  },
  images: {
    domain: ["giphy.com"],
  },
};

module.exports = nextConfig;
