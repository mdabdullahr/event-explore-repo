import React from "react";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  const { thumbnail, name, category, date, location, entryFee, description, id } =
    event;
  return (
    <div className="max-w-lg rounded-2xl flex flex-col flex-1 shadow-lg shadow-gray-600 border border-gray-600">
     <div data-aos="zoom-in" className="overflow-hidden">
     <img
        src={thumbnail}
        alt={name}
        className="w-full h-40 md:h-48 xl:h-72 object-cover rounded-t-xl mb-2 md:mb-4 transition-transform duration-500 hover:scale-90"
      />
     </div>
      <div className="px-2 md:px-4">
      <h2 className="text-sm md:text-xl lg:text-2xl text-gray-200 font-bold mb-1 md:mb-3">{name}</h2>
      <p className="text-xs md:text-lg text-gray-400 mb-1 md:mb-3 font-semibold">{category}</p>
      <p className=" text-xs md:text-lg mb-1 md:mb-3 text-gray-400">
        <strong>Date :</strong> {date}
      </p>
      <p className="text-xs md:text-lg mb-1 md:mb-3 text-gray-400">
        <strong>Location :</strong> {location}
      </p>
      <p className="text-xs md:text-lg mb-1 md:mb-3 text-gray-400">
        <strong>Entry Fee :</strong> {entryFee}
      </p>
      <p className="text-xs md:text-lg text-accent mb-2 md:mb-4 line-clamp-2 md:line-clamp-3"><strong>Details : </strong>{description}</p>
      </div>
      <Link to={`/eventDetails/${id}`} data-aos="zoom-in" className="mt-auto py-1 md:py-2 text-xs md:text-lg font-medium text-secondary border-t border-gray-600 bg-gray-900 w-full text-center hover:text-white hover:bg-secondary rounded-b-xl hover:rounded-b-xl">
        View More
      </Link>
    </div>
  );
};

export default EventCard;
