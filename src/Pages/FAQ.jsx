import React, { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    document.title = "Event Explore | FAQ";
  }, []);
  return (

      <div className="w-11/12 lg:w-9/12 2xl:w-8/12 mx-auto mt-10 space-y-6 bg-gray-800 p-5  md:p-10 rounded-3xl">
      <h2 className="text-xl md:text-4xl xl:text-5xl font-bold text-center text-accent pt-5 pb-5 lg:pb-10 underline">
        Frequently <span className="text-secondary">Asked</span> Questions
      </h2>
      {/* FAQ non 1 */}
      <div className="collapse collapse-arrow bg-gray-900 border border-gray-700 p-0 md:p-5 ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold text-primary text-sm md:text-xl lg:text-2xl">
          Who are we?
        </div>
        <div className="collapse-content text-xs lg:text-lg xl:text-xl text-accent">
          We are a local event discovery platform that helps users find,
          explore, and participate in various events such as conferences,
          workshops, sports competitions, art exhibitions, and more. Our mission
          is to create a space where people can easily discover upcoming events,
          register to attend, and share their feedback or ratings to help
          others.
        </div>
      </div>

      {/* faq no 2 */}
      <div className="collapse collapse-arrow bg-gray-900 border border-gray-700 p-0 md:p-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-primary text-sm md:text-xl lg:text-2xl">
          Why stay with us?
        </div>
        <div className="collapse-content text-xs lg:text-lg xl:text-xl text-accent">
          We offer a user-friendly platform where you can easily discover local
          events, register for them, and engage with the community. By staying
          with us, you'll always be updated on the latest events in your area,
          and your feedback will help us improve the event experience for
          everyone. Join us and be part of a growing community of event
          enthusiasts!
        </div>
      </div>

      {/* faq no 3 */}
      <div className="collapse collapse-arrow bg-gray-900 border border-gray-700 p-0 md:p-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-primary text-sm md:text-xl lg:text-2xl">
          How do I find an event?
        </div>
        <div className="collapse-content text-xs lg:text-lg xl:text-xl text-accent">
          You can filter events by category or location by going to the homepage
          or the event browse page.
        </div>
      </div>

      {/* faq no 4 */}
      <div className="collapse collapse-arrow bg-gray-900 border border-gray-700 p-0 md:p-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-primary text-sm md:text-xl lg:text-2xl">
          Where can I find detailed information about the event?
        </div>
        <div className="collapse-content text-xs lg:text-lg xl:text-xl text-accent">
          By clicking the "Details" button on each event card, you will see
          detailed information about the event, such as time, location,
          organizer, and detailed description.
        </div>
      </div>

      {/* faq no 5 */}
      <div className="collapse collapse-arrow bg-gray-900 border border-gray-700 p-0 md:p-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-primary text-sm md:text-xl lg:text-2xl">
          What do I need to do to participate in the event?
        </div>
        <div className="collapse-content text-xs lg:text-lg xl:text-xl text-accent">
          You will first need to log in to the website. Then you can confirm
          your participation by going to any event and clicking the "Reserve
          Seat" button with your full name and email address.
        </div>
      </div>

      {/* faq no 6 */}
      <div className="collapse collapse-arrow bg-gray-900 border border-gray-700 p-0 md:p-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-primary text-sm md:text-xl lg:text-2xl">
          Can I give ratings and feedback on the event?
        </div>
        <div className="collapse-content text-xs lg:text-lg xl:text-xl text-accent">
          Yes, if you participate in the event, you can leave ratings and
          reviews after the event, so that other users can benefit from your
          feedback.
        </div>
      </div>

      {/* faq no 7 */}
      <div className="collapse collapse-arrow bg-gray-900 border border-gray-700 p-0 md:p-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-primary text-sm md:text-xl lg:text-2xl">
          Is this website usable on mobile devices?
        </div>
        <div className="collapse-content text-xs lg:text-lg xl:text-xl text-accent">
          Yes, this website works well on both mobile and desktop platforms.
        </div>
      </div>

      {/* faq no 8 */}
      <div className="collapse collapse-arrow bg-gray-900 border border-gray-700 p-0 md:p-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-primary text-sm md:text-xl lg:text-2xl">
          What should I do if I forget my password?
        </div>
        <div className="collapse-content text-xs lg:text-lg xl:text-xl text-accent">
          Click on the “Forget Password?” option on the login page and enter
          your email to receive a password reset link.
        </div>
      </div>

      {/* faq no 9 */}
      <div className="collapse collapse-arrow bg-gray-900 border border-gray-700 p-0 md:p-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-primary text-sm md:text-xl lg:text-2xl">
          Do I need an account to view events details?
        </div>
        <div className="collapse-content text-xs lg:text-lg xl:text-xl text-accent">
          Yes, you can't view events without logging in, but to register, leave
          feedback, or reserve a seat, you must be logged in.
        </div>
      </div>

      {/* faq no 10 */}
      <div className="collapse collapse-arrow bg-gray-900 border border-gray-700 p-0 md:p-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-primary text-sm md:text-xl lg:text-2xl">
          Is this platform free to use?
        </div>
        <div className="collapse-content text-xs lg:text-lg xl:text-xl text-accent">
          Yes, browsing and discovering events is completely free. Some events
          may require paid registration, which will be clearly mentioned.
        </div>
      </div>

      {/* faq no 11 */}
      <div className="collapse collapse-arrow bg-gray-900 border border-gray-700 p-0 md:p-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-primary text-sm md:text-xl lg:text-2xl">
          Will I get reminders for upcoming events?
        </div>
        <div className="collapse-content text-xs lg:text-lg xl:text-xl text-accent">
          Yes, after reserving a seat, you will receive an email reminder before
          the event.
        </div>
      </div>

      {/* faq no 12 */}
      <div className="collapse collapse-arrow bg-gray-900 border border-gray-700 p-0 md:p-5 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-primary text-sm md:text-xl lg:text-2xl">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-xs lg:text-lg xl:text-xl text-accent">
          Go to the "My Profile" page, where you can change your name and
          profile photo, then save the changes using Firebase.
        </div>
      </div>
    </div>

  );
};

export default FAQ;
