
const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    {
      href: "/pages",
      label: "Pages",
      submenu: [
        { href: "/", label: "Home Page" },
        { href: "/about", label: "About Page" },
        { href: "/services", label: "Services Page" },
        { href: "/blog", label: "Blog Page" },
        { href: "/contact-us", label: "Contact Page" },
      ],
    },
  ];
  
export default menuItems;