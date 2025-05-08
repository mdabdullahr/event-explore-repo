import React, { useEffect, useRef } from "react";
import Slider from "../components/Slider/Slider";
import { useLoaderData } from "react-router";
import EventCard from "../components/EventCard/EventCard";

const Home = () => {
  useEffect(() => {
    document.title = "Event Explore | Home";
  }, []);
  const data = useLoaderData();

  const upcomingRef = useRef();

  const scrollToUpcoming = () => {
    upcomingRef.current?.scrollIntoView({
      behavior: "smooth", 
      block: "start", 
    });
  };

  const topRatedEvents = data
    .filter((event) => event.rating >= 4.5) // you can customize logic
    .slice(0, 3); // show top 3

  return (
    <div className="mb-10">
      <Slider></Slider>
      <div ref={upcomingRef} className="w-11/12 lg:w-10/12 mx-auto mt-16 mb-10">
        <h2
          data-aos="zoom-in"
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-5 text-center"
        >
          Upcoming <span className="text-secondary">Events</span>
        </h2>
        <p className="text-accent text-sm lg:text-lg text-center">
          Stay updated with a variety of exciting upcoming events — including
          conferences, workshops, sports tournaments, art exhibitions, and more.
          Each event comes with detailed information and easy participation
          options. Whether you want to learn something new, have fun, or explore
          your interests, don’t miss out on the events listed here!
        </p>
      </div>
      <div className="w-10/12 md:w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 md:gap-10">
        {data.map((event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </div>

      {/* Extra section 1 - Top Rated Events (Dynamic) */}
      {topRatedEvents.length > 0 && (
        <section className="w-10/12 md:w-11/12 lg:w-9/12 mx-auto mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
            Top <span className="text-secondary">Rated Events</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRatedEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gradient-to-r from-secondary to-gray-900 rounded-xl p-5 shadow-lg hover:scale-[1.02] transition-all"
              >
                <img
                  data-aos="zoom-in"
                  src={event.thumbnail}
                  alt={event.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h4 className="text-xl font-bold text-accent mb-2">
                  {event.name}
                </h4>
                <p className="text-sm text-primary">
                  {event.description?.slice(0, 100)}...
                </p>
                <div className="mt-3 text-yellow-500">
                  {"⭐️".repeat(Math.round(event.rating))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Extra section 2 - Call to Action */}
      <section data-aos="zoom-in" className="w-10/12 md:w-11/12 lg:w-9/12 mx-auto mt-20 bg-gradient-to-r from-gray-900 to-secondary p-10 rounded-2xl text-white text-center shadow-xl">
        <h3 className="text-xl md:text-4xl font-bold mb-4">
          Join Our Vibrant Event Community
        </h3>
        <p className="mb-6 text-sm md:text-lg">
          Stay connected with thousands of event lovers, share feedback, and
          never miss an exciting opportunity again!
        </p>
        <button
          data-aos="zoom-out" 
          onClick={scrollToUpcoming}
          className="bg-white text-secondary cursor-pointer font-bold py-2 px-6 rounded-lg shadow transition-transform duration-500 hover:scale-105"
        >
          Explore Events
        </button>
      </section>
    </div>
  );
};

export default Home;
