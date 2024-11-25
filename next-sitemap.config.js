// next-sitemap.config.js

module.exports = {
  siteUrl: "http://localhost:3000", // Make sure this matches your local server URL
  generateRobotsTxt: true, // Automatically generates robots.txt
  exclude: ["/api/*"], // Exclude API routes from the sitemap
  additionalPaths: async (config) => {
    // You can list additional paths manually to be included in the sitemap
    return [
      await config.transform(config, "/about"),
      await config.transform(config, "/portfolio"),
      await config.transform(config, "/services"),
      await config.transform(config, "/blog"),
      await config.transform(config, "/contact-us"),
      await config.transform(config, "/get-quote"),
      await config.transform(config, "/virtual-paint-project"),
      await config.transform(config, "/legal"), 
    ];
  },
  robotsTxtOptions: {
    additionalSitemaps: [
      "http://localhost:3000/sitemap.xml", // Local URL for the sitemap
    ],
  },
};