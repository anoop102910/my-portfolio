import React from "react";

function Footer() {
  return (
    <div className="mt-32 bg-white  border-black p-4 rounded-lg shadow-lg">
      <div id="footer" className="flex items-center gap-x-10 mx-auto w-min max-sm:w-full">
        <a className="neo w-20" target="1"  href="https://github.com/anoop102910?tab=repositories">
          <img  src="github.png" alt="" />
        </a>
        <a className="neo w-20" target="2"  href="">
          <img src="./instagram.png" alt="" />
        </a>
        <a className="neo w-20" target="3"  href="https://www.linkedin.com/in/anoop-singh-1a67ba252/">
          <img src="./linkedin.png" alt="" />
        </a>
        <a className="neo w-20" target="4"  href="https://wa.me/6388175878">
          <img src="whatsapp.png" alt="" />
        </a>
      </div>
      <div>
        <img src="lake.svg" className="w-full md:h-[250px] object-cover object-top" alt="" />
      </div>
    </div>
  );
}

export default Footer;
