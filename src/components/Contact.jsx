import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <h2
        className="my-4 xs:my-6 sm:my-10 text-2xl xs:text-3xl lg:text-4xl font-serif font-bold text-center"
        data-aos="fade-right"
        data-aos-duration="1400"
      >
        CONTACT
      </h2>
      <div className="w-full h-auto bg-gray-100 py-4 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 w-11/12 mx-auto ">
          <div data-aos="fade-up" data-aos-duration="1300">
            <figure className="w-full h-full">
              <img
                src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
                alt="hotel image"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
          <form action="">
            <div
              className="block xs:flex gap-3 mb-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <input
                type="text"
                name="text"
                autoComplete="off"
                placeholder="your name"
                className="w-full h-10 pl-5 text-sm capitalize border-2 outline-none mb-4"
              />
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="email"
                className="w-full h-10 pl-5 text-sm capitalize border-2 outline-none"
              />
            </div>
            <input
              type="number"
              name="number"
              autoComplete="off"
              placeholder="phone number"
              className="w-full h-10 pl-5 text-sm capitalize border-2 mb-4 outline-none"
              data-aos="fade-up"
              data-aos-duration="1300"
            />
            <textarea
              name="message"
              namemessage
              cols="30"
              rows="10"
              placeholder="message"
              className="w-full resize-none mb-7 outline-none p-5 text-base font-serif"
              data-aos="fade-up"
              data-aos-duration="1400"
            />
            <div className="bg-orange-500 text-white text-center py-3 font-serif text-base hover:bg-orange-600 duration-300 cursor-pointer">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>

      {/* MAP */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233283.05348215884!2d90.18063886259733!3d23.99409226005985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a72f17bb83%3A0x57188ff62fd95026!2sThe%20Westin%20Dhaka!5e0!3m2!1sen!2sbd!4v1710089071565!5m2!1sen!2sbd"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
};

export default Contact;
