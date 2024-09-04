import React from "react";
import { socialLinks } from "@/utils/data";
function Footer() {


  return (
    <div className="mt-32   border-black p-4 rounded-lg shadow-lg">
      <div id="footer" className="flex items-center gap-x-10 mx-auto w-min max-sm:w-full">
        {socialLinks.map((link, index) => (
          <a key={index} className="neo w-20" target={link.target} href={link.href}>
            <img src={link.src} alt={link.alt} />
          </a>
        ))}
      </div>
      <div>
        <img src="lake.svg" className="w-full md:h-[250px] object-cover object-top" alt="" />
      </div>
    </div>
  );
}

export default Footer;
