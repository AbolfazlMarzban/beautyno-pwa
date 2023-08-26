import React from "react";
import ServiceBox from "./serviceBox/serviceBox";

export default function HomeServices({}) {
  return (
    <div className="w-full h-full py-4">
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
    </div>
  );
}
