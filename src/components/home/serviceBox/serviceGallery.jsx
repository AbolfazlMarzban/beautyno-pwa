import React from "react";
import GalleryImg from "../../../assets/images/modern-beauty-salon-interior.jpg";

export default function ServiceGallery({}) {
  return (
    <div className="border border-1 p-2 mt-4 rounded-xl flex">
      <div
        className="basis-1/4 h-80 rounded-xl bg-cover bg-center mx-2"
        style={{ backgroundImage: `url(${GalleryImg})` }}
      ></div>
      <div
        className="basis-1/4 h-80 rounded-xl bg-cover bg-center mx-2"
        style={{ backgroundImage: `url(${GalleryImg})` }}
      ></div>
      <div
        className="basis-1/4 h-80 rounded-xl bg-cover bg-center mx-2"
        style={{ backgroundImage: `url(${GalleryImg})` }}
      ></div>
      <div
        className="basis-1/4 h-80 rounded-xl bg-cover bg-center mx-2"
        style={{ backgroundImage: `url(${GalleryImg})` }}
      ></div>
    </div>
  );
}
