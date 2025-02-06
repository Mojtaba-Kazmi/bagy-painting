const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  {
    label: "Pages", // No href to avoid broken link
    submenu: [
      { href: "/", label: "Home Page" },
      { href: "/about", label: "About Page" },
      { href: "/projects", label: "Projects Page" },
      { href: "/services", label: "Services Page" },
      { href: "/blog", label: "Blog Page" },
      { href: "/virtual-paint-project", label: "Virtual Paint Project Page" },
      { href: "/contact-us", label: "Contact Page" },
    ],
  },
];

export default menuItems;