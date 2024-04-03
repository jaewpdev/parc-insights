"use client";

import { useEffect } from "react";

export default function StrategyCall() {
  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Embedding the iframe */}
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/ZJ2LMnad8ljTvXZnv07m"
        style={{
          width: "100%",
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        id="KA0G56RkQzx0abbKjUmA_1712156961209"
      ></iframe>
    </div>
  );
}
