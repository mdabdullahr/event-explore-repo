import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const EventDetails = () => {
    const [iname, setIname] = useState("");
    const [email, setEmail] = useState("");
    const data = useLoaderData();
    const { id } = useParams();
    const convertedId = parseInt(id);

    const remainingData = data.find(singleData => singleData.id === convertedId);

    const { thumbnail, name, category, date, location, entryFee, description } = remainingData;

    const handleReserve = (e) => {
        e.preventDefault();
        toast.success("Seat Reserved Successfully!");
        setIname("");
        setEmail("");
    };

    return (
        <div className='w-11/12 lg:w-9/12 mx-auto my-10'>
            <div>
                <div data-aos="zoom-out">
                <img
                    src={thumbnail}
                    alt={name}
                    className='w-full h-72 md:h-124 xl:h-152 2xl:h-200 object-cover rounded-2xl transition-transform duration-500 hover:scale-95' />
                </div>
                <div data-aos="zoom-out">
                <h1  className='text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-primary my-5 transition-transform duration-500 hover:scale-105'>{name}</h1>
                </div>
                <h3 className='text-sm md:text-[16px] lg:text-2xl font-medium text-accent mb-2 md:mb-5'>
                    <strong>Category : </strong>{category}
                </h3>
                <h4 className='text-sm md:text-[16px] lg:text-2xl font-medium text-accent mb-2 md:mb-5'>
                    <strong>Event Date : </strong>{date}
                </h4>
                <p className='text-sm md:text-[16px] lg:text-2xl font-medium text-accent mb-2 md:mb-5'>
                    <strong>Event Location : </strong>{location}
                </p>
                <p className='text-sm md:text-[16px] lg:text-2xl font-medium text-accent mb-2 md:mb-5'>
                    <strong>Event Entry Fee :</strong> {entryFee}
                </p>
                <p className='text-sm md:text-lg lg:text-xl xl:text-2xl text-accent'>
                    <strong className='underline text-secondary'> Event Details : </strong><br /> {description}
                </p>
            </div>

            {/* Form */}
            <div className='mt-10  p-5 md:p-10 shadow-md shadow-error'>
                <form onSubmit={handleReserve} className="mt-6 space-y-4">
                    <h2 data-aos="zoom-out" className='text-2xl font-bold text-primary text-center mt-5'>Reserve A Seat</h2>
                    <label className='text-primary font-medium text-sm md:text-lg'>Full Name</label>
                    <input
                        className="input input-bordered w-full bg-gray-800 text-primary h-16 mt-2 text-lg"
                        type="text"
                        placeholder="Please Enter Your Name"
                        value={iname}
                        onChange={(e) => setIname(e.target.value)}
                        required
                    />
                    <label className='text-primary font-medium text-sm md:text-lg'>Your Email</label>
                    <input
                        className="input input-bordered w-full bg-gray-800 text-primary h-16 mt-2 text-lg"
                        type="email"
                        placeholder="Please Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button data-aos="zoom-in" type="submit" className="mt-5 bg-secondary w-full text-sm md:text-xl text-primary font-semibold py-3">Reserve Seat</button>
                </form>
            </div>
        </div>
    );
};

export default EventDetails;
