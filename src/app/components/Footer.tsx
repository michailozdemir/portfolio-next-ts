import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto text-center pb-8 pt-10 gap-14">
      <p className="text-sm">Copyright © {currentYear} michailozdemir</p>
    </footer>
  );
};

export default Footer;
