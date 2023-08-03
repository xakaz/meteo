import React from "react";

function Footer() {
  return (
    <div className="w-full flex justify-center items-center h-20">
      Données extraites de&nbsp;
      <span>
        <a
          href="https://www.weatherapi.com/"
          className="cursor-pointer underline text-blue-300"
          target="_blank"
          rel="noreferrer"
        >
          weatherapi.com
        </a>
      </span>
    </div>
  );
}

export default Footer;
