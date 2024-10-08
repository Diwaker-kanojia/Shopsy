import React from "react";
import { FaStar } from "react-icons/fa6";

const SingleProduct = ({ img, title, color, rating, aosDelay }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={aosDelay} className="space-y-3 ">
      <img
        src={img}
        alt=""
        className="h-[220px] w-[150px] object-cover rounded-md"
      />
      <div>
        <h3 className="font-semibold ">{title}</h3>
        <p className="text-sm text-gray-600">{color}</p>
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
