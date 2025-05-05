import React from "react";

const EventCard = ({ event }) => {
  const { thumbnail, name, category, date, location, entryFee, description } =
    event;
  return (
    <div className="max-w-md rounded-2xl p-2 md:p-4 bg-white flex flex-col flex-1 shadow">
      <img
        src={thumbnail}
        alt={name}
        className="w-full h-24 md:h-48 lg:h-72 object-cover rounded-t-xl mb-2 md:mb-4"
      />
      <h2 className="text-sm md:text-xl lg:text-2xl text-primary font-bold mb-1 border-t border-base-300 pt-1">{name}</h2>
      <p className="text-xs md:text-lg text-accent mb-1 md:mb-2 font-semibold">{category}</p>
      <p className=" text-xs md:text-lg mb-1 text-accent">
        <strong>Date:</strong> {date}
      </p>
      <p className="text-xs md:text-lg mb-1 text-accent">
        <strong>Location:</strong> {location}
      </p>
      <p className="text-xs md:text-lg mb-1 md:mb-2 text-accent">
        <strong>Entry Fee:</strong> {entryFee}
      </p>
      <p className="text-xs md:text-lg text-accent mb-2 md:mb-4 line-clamp-2 md:line-clamp-3"><strong>Details: </strong>{description}</p>
      <button className="mt-auto py-1 md:py-2 text-xs md:text-lg font-medium text-secondary border border-base-300 bg-gray-800 w-full hover:text-white hover:bg-secondary rounded-b-xl hover:rounded">
        View More
      </button>
    </div>
  );
};

export default EventCard;
