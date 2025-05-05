import React from "react";

const EventCard = ({ event }) => {
  const { thumbnail, name, category, date, location, entryFee, description } =
    event;
  return (
    <div className="max-w-lg rounded-2xl flex flex-col flex-1 shadow-lg shadow-gray-600 border border-gray-600">
      <img
        src={thumbnail}
        alt={name}
        className="w-full h-24 md:h-48 lg:h-72 object-cover rounded-t-xl mb-2 md:mb-4"
      />
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
      <button className="mt-auto py-1 md:py-2 text-xs md:text-lg font-medium text-secondary border-t border-gray-600 bg-gray-900 w-full hover:text-white hover:bg-secondary rounded-b-xl hover:rounded-b-xl">
        View More
      </button>
    </div>
  );
};

export default EventCard;
