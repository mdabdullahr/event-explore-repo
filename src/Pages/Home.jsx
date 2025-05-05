import React from 'react';
import Slider from '../components/Slider/Slider';
import { useLoaderData } from 'react-router';
import EventCard from '../components/EventCard/EventCard';

const Home = () => {
    const data = useLoaderData();
    return (
        <div className='mb-10'>
            <Slider></Slider>
            <div className='w-11/12 lg:w-10/12 mx-auto my-10'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-3'>Upcoming <span className='text-secondary'>Events</span></h2>
            <p className='text-accent text-sm lg:text-lg'>Stay updated with a variety of exciting upcoming events — including conferences, workshops, sports tournaments, art exhibitions, and more. Each event comes with detailed information and easy participation options. Whether you want to learn something new, have fun, or explore your interests, don’t miss out on the events listed here!</p>
            </div>
            <div className='w-11/12 lg:w-10/12 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    data.map(event => 
                    <EventCard key={event.id}
                    event={event}>
                    </EventCard>)
                }
            </div>
        </div>
    );
};

export default Home;