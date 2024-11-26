module.exports = {
  siteUrl: "https://www.bagypainting.com.au", // Update with your domain
  generateRobotsTxt: true, // Automatically generates robots.txt
  exclude: ["/api/*"], // Exclude API routes from the sitemap
  additionalPaths: async (config) => {
    return [
      await config.transform(config, "/"), // Add homepage here
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
      "https://www.bagypainting.com.au/sitemap.xml", // Update with your sitemap URL
    ],
  },
};