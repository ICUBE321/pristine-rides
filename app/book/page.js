"use client";
import { Navbar } from "@/components/navbar";
import { useState } from "react";
import {
  validateAppointment,
  sendEmail,
  getMinimumDateTime,
} from "@/components/booking";

export default function Book() {
  const [bookingStatus, setBookingStatus] = useState(false);

  const submitBooking = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const make = formData.get("make");
    const model = formData.get("model");
    const year = formData.get("year");
    const service = formData.get("selectedService");
    const date = formData.get("datetime");
    const message = formData.get("message");
    const promo = formData.has("remember");

    const appointment = {
      name: name,
      email: email,
      phone: phone,
      make: make,
      model: model,
      year: year,
      service: service,
      date: date,
      message: message,
      promo: promo,
    };

    const appointmentValidated = validateAppointment(appointment);
    if (appointmentValidated.success == true) {
      const sendEmailResponse = await sendEmail(appointment);
      if (sendEmailResponse.status == 200) {
        form.reset();
        setBookingStatus(true);
      } else {
        console.error(
          "Failed emailing with status: ",
          sendEmailResponse.status,
        );
        console.error(sendEmailResponse.error);
      }
    } else {
      appointmentValidated.issues
        ? console.error(appointmentValidated.issues)
        : console.error(appointmentValidated.error);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />
      {/* Header */}
      <div className="block bg-[url(/benz-interior.jpg)] bg-no-repeat bg-cover bg-left">
        <div className="bg-linear-to-r from-black to-transparent py-8 lg:py-16 px-7 lg:px-14">
          <div className="flex-col lg:max-w-1/4">
            <h2 className="text-lg lg:text-sm font-bold lg:font-normal">
              BOOK AN APPOINTMENT
            </h2>
            <h5 className="mb-3 text-2xl lg:text-4xl pt-4 pb-4 font-semibold tracking-tight text-heading lg:leading-12">
              Schedule Your Detailing Appointment
            </h5>
            <p className="text-sm lg:text-lg lg:mb-6 w-3/4 lg:w-full">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible to confirm your booking.
            </p>
          </div>
        </div>
      </div>
      {bookingStatus ? (
        <div className="flex flex-col items-center p-6 mt-10 mb-10 text-electric-blue">
          <h2 className="text-4xl mb-10">Request Received</h2>
          <p className="text-center font-medium">
            We&apos;ve received your appointment request. We&apos;ll contact you
            to confirm availability.
          </p>
        </div>
      ) : (
        <form
          className="self-center-safe lg:w-3xl shadow-md rounded-md p-6 lg:mt-10 lg:mb-10 text-black"
          onSubmit={submitBooking}
        >
          <h2 className="font-bold text-xl mb-4">Appointment Request</h2>
          <div className="flex justify-between">
            <div className="mb-5 basis-1/2 mr-6">
              <label
                htmlFor="name"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded-md text-heading text-sm w-full px-3 py-2.5 placeholder:text-body"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-5 basis-1/2">
              <label
                htmlFor="email"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md text-heading text-sm w-full px-3 py-2.5 placeholder:text-body"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mb-5 basis-1/2 mr-6">
              <label
                htmlFor="phone"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border border-gray-300 rounded-md text-heading text-sm w-full px-3 py-2.5 placeholder:text-body"
                placeholder="+16134696082"
                required
              />
            </div>
            <div className="mb-5 basis-1/2">
              <label
                htmlFor="make"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Vehicle Make
              </label>
              <input
                type="text"
                id="make"
                name="make"
                className="border border-gray-300 rounded-md text-heading text-sm w-full px-3 py-2.5 placeholder:text-body"
                placeholder="e.g. Toyota"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mb-5 basis-1/2 mr-6">
              <label
                htmlFor="model"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Vehicle Model
              </label>
              <input
                type="text"
                id="model"
                name="model"
                className="border border-gray-300 rounded-md text-heading text-sm w-full px-3 py-2.5 placeholder:text-body"
                placeholder="e.g. Camry"
              />
            </div>
            <div className="mb-5 basis-1/2">
              <label
                htmlFor="year"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Year
              </label>
              <input
                type="number"
                id="year"
                name="year"
                className="border border-gray-300 rounded-md text-heading text-sm w-full px-3 py-2.5 placeholder:text-body"
                placeholder="e.g. 2020"
                min="1900"
                max={new Date().getFullYear()}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mb-5 basis-1/2 mr-6">
              <label
                htmlFor="service"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Requested Service
              </label>
              <select
                name="selectedService"
                className="border border-gray-300 rounded-md text-heading text-sm w-full px-3 py-2.5 placeholder:text-body"
                required
              >
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="minivan">Minivan</option>
              </select>
            </div>
            <div className="mb-5 basis-1/2">
              <label
                htmlFor="datetime"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Preferred Date & Time
              </label>
              <input
                type="datetime-local"
                id="datetime"
                name="datetime"
                min={getMinimumDateTime()}
                className="border border-gray-300 rounded-md text-heading text-sm w-full px-3 py-2.5 placeholder:text-body"
                placeholder="Select date and time"
                required
              />
            </div>
          </div>
          <label
            htmlFor="message"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Additional Notes (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border border-gray-300 rounded-md text-heading text-sm w-full p-3.5 placeholder:text-body mb-4"
            placeholder="Any special requests or details..."
          ></textarea>
          <label htmlFor="remember" className="hidden flex items-center mb-5">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
            />
            <p className="ms-2 text-sm font-medium text-heading select-none">
              I agree to receive promotional emails (optional)
            </p>
          </label>
          <button
            type="submit"
            className="text-white bg-electric-blue box-border border rounded-md w-full text-sm font-bold px-4 py-2.5 hover:bg-blue-800 cursor-pointer"
          >
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
}
