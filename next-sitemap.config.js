// next-sitemap.config.js

module.exports = {
  siteUrl: "https://www.bagypainting.com.au", // Use the preferred canonical version for your live site
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
      "https://www.bagypainting.com.au/sitemap.xml", // "www" version of sitemap
      "https://bagypainting.com.au/sitemap.xml", // Non-"www" version of sitemap
    ],
  },
};