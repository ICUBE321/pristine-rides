import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <Navbar />
      {/* Header */}
      <div className="block bg-[url(/benz-interior.jpg)] bg-no-repeat bg-cover bg-left">
        <div className="bg-linear-to-r from-black to-transparent py-16 px-14">
          <div className="flex-col max-w-1/4">
            <h2 className="text-sm">PREMIUM CAR DETAILING</h2>
            <h5 className="mb-3 text-4xl pt-4 pb-4 font-semibold tracking-tight text-heading leading-12">
              A Cleaner Ride Is a Better Ride
            </h5>
            <p className="text-body mb-6">
              We bring out the best in your vehicles with professional detailing
              services that protect, restore and make it shine.
            </p>
          </div>
        </div>
      </div>
      {/* Our Services */}
      <div className="flex flex-col justify-center-safe text-black p-7">
        <h5 className="text-3xl font-semibold tracking-tight text-heading leading-12 text-center">
          Our Detailing Services
        </h5>
        <p className="text-body mb-8 text-center text-lg text-gray-600">
          Professional care for every part of your vehicle.
        </p>
        <div className="flex justify-around">
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="genesis-interior.jpg"
                alt="Sedan image"
              />
            </a>
            <div className="p-5">
              <img
                className="w-10 h-10 rounded-full p-1"
                src="blue-sedan-icon.png"
                alt="Rounded sedan avatar"
              />
              <div className="text-left">
                <a href="#">
                  <h5 className="mt-3 mb-6 text-2xl tracking-tight text-heading">
                    Sedan Detailing
                  </h5>
                </a>
                <div className="flex justify-between">
                  <h5 className="text-lg font-semibold">From $100</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="suv interior.jpg"
                alt="SUV image"
              />
            </a>
            <div className="p-5">
              <img
                className="w-10 h-10 rounded-full p-1"
                src="blue-sedan-icon.png"
                alt="Rounded sedan avatar"
              />
              <div className="text-left">
                <a href="#">
                  <h5 className="mt-3 mb-6 text-2xl tracking-tight text-heading">
                    SUV Detailing
                  </h5>
                </a>
                <div className="flex justify-between">
                  <h5 className="text-lg font-semibold">From $150</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="benz-minivan-interior.jpeg"
                alt="Benz minivan image"
              />
            </a>
            <div className="p-5">
              <img
                className="w-10 h-10 rounded-full p-1"
                src="blue-sedan-icon.png"
                alt="Rounded sedan avatar"
              />
              <div className="text-left">
                <a href="#">
                  <h5 className="mt-3 mb-6 text-2xl tracking-tight text-heading">
                    Minivan Detailing
                  </h5>
                </a>
                <div className="flex justify-between">
                  <h5 className="text-lg font-semibold">From $200</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Book Now */}
      <div>
        <div className="block bg-[url(/aehra-suv-interior-view.jpg)] bg-no-repeat bg-cover bg-bottom">
          <div className="bg-linear-to-r from-black to-transparent py-16 px-14">
            <div className="flex-col max-w-1/3">
              <h2 className="text-sm">YOUR VEHICLE DESERVES THE BEST</h2>
              <h5 className="mb-3 text-4xl pt-3 pb-2 font-semibold tracking-tight text-heading leading-10">
                Book Your Detailing Appointment Today
              </h5>
              <p className="text-body mb-6">
                Quick, easy and hassle-free booking. Get your car looking its
                best in no time.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center text-white bg-electric-blue box-border border border-transparent rounded-md hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2 mr-3 focus:outline-none hover:bg-blue-800"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
