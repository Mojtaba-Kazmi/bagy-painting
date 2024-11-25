
const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    {
      href: "/pages",
      label: "Pages",
      submenu: [
        { href: "/", label: "Home Page" },
        { href: "/about", label: "About Page" },
        { href: "/portfolio", label: "Portfolio Page" },
        { href: "/services", label: "Services Page" },
        { href: "/blog", label: "Blog Page" },
        { href: "/virtual-paint-project", label: "Virtual Paint Project Page" },
        { href: "/contact-us", label: "Contact Page" },
      ],
    }
  ];
  
export default menuItems;