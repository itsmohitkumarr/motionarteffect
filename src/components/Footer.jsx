import React from "react";

const Footer = () => {
  return (
    <div className="w-full px-20 btn flex items-center justify-between h-12">
      <span>© 2023 Copywrite. All rights reserved by QodeMatrix</span>
      <span>
        <ul className="flex gap-8">
          <li>Documentation</li>
          <li>Support</li>
        </ul>
      </span>
    </div>
  );
};

export default Footer;
