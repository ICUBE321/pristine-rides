import { Navbar } from "@/components/navbar";

export default function Services() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <Navbar />
      {/* Header */}
      <div className="block bg-[url(/benz-interior.jpg)] bg-no-repeat bg-cover bg-left">
        <div className="bg-linear-to-r from-black to-transparent py-16 px-14">
          <div className="flex-col max-w-1/3">
            <h2 className="text-sm">OUR SERVICES</h2>
            <h5 className="text-4xl pt-4 pb-4 font-semibold tracking-tight text-heading leading-12">
              Professional Detailing Packages
            </h5>
            <p className="text-body">
              Choose the service that fits your needs. All packages use premium
              products and proven techniques.
            </p>
          </div>
        </div>
      </div>
      {/* Packages */}
      <div className="flex-col p-6 mb-6">
        <div className="flex justify-between bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-4">
          <img
            className="max-w-3xs aspect-square object-cover rounded-lg basis-3/6"
            src="genesis-interior.jpg"
            alt="Sedan image"
          />
          <div className="basis-3/6 self-center">
            <h1 className="text-black">Sedan Detailing</h1>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check preview-icon inline"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              spec 1
            </p>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check preview-icon inline"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              spec 2
            </p>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check preview-icon inline"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              spec 3
            </p>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check preview-icon inline"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              spec 4
            </p>
          </div>
          <div className="basis-1/6 self-end-safe">
            <h5 className="text-black font-bold mb-2">From $100</h5>
            <a
              href="/book"
              className="inline-flex items-center text-white bg-electric-blue box-border border border-transparent rounded-md hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2 mr-3 focus:outline-none hover:bg-blue-800"
            >
              Book Now
            </a>
          </div>
        </div>
        <div className="flex justify-between bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-4">
          <img
            className="max-w-3xs aspect-square object-cover rounded-lg basis-3/6"
            src="suv interior.jpg"
            alt="SUV image"
          />
          <div className="basis-3/6 self-center">
            <h1 className="text-black">SUV Detail</h1>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check preview-icon inline"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              spec 1
            </p>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check preview-icon inline"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              spec 2
            </p>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check preview-icon inline"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              spec 3
            </p>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check preview-icon inline"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              spec 4
            </p>
          </div>
          <div className="basis-1/6 self-end-safe">
            <h5 className="text-black font-bold mb-2">From $150</h5>
            <a
              href="/book"
              className="inline-flex items-center text-white bg-electric-blue box-border border border-transparent rounded-md hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2 mr-3 focus:outline-none hover:bg-blue-800"
            >
              Book Now
            </a>
          </div>
        </div>
        <div className="flex justify-between bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-4">
          <img
            className="max-w-3xs aspect-square object-cover rounded-lg basis-3/6"
            src="benz-minivan-interior.jpeg"
            alt="Benz minivan image"
          />
          <div className="basis-3/6 self-center">
            <h1 className="text-black">Minivan Detail</h1>
            <p className="text-gray-400">Minivan detail specs</p>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check preview-icon inline"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              spec 1
            </p>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check preview-icon inline"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              spec 2
            </p>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check preview-icon inline"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              spec 3
            </p>
            <p className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check preview-icon inline"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              spec 4
            </p>
          </div>
          <div className="basis-1/6 self-end-safe">
            <h5 className="text-black font-bold mb-2">From $200</h5>
            <a
              href="/book"
              className="inline-flex items-center text-white bg-electric-blue box-border border border-transparent rounded-md hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2 mr-3 focus:outline-none hover:bg-blue-800"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
