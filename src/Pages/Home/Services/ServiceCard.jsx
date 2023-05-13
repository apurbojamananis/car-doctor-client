/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Service" className="rounded-xl h-[200px]" />
        </figure>
        <div className="items-center px-10">
          <h2 className="text-2xl font-bold mt-2">{title}</h2>
          <div className="card-actions flex w-full justify-between items-center pb-5 pt-2 text-error font-bold">
            <p className="text-left">Price: ${price}</p>
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-circle btn-outline text-error">
                Sew Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
