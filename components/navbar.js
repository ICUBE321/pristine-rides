"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-950 sticky w-full z-20 top-0 inset-s-0 border-default">
      <div className="lg:max-w-7xl flex flex-wrap items-center justify-between mx-auto p-2 lg:p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="pristine-rides-logo.svg"
            className="h-5 lg:h-7"
            alt="Pristine Rides Logo"
          />
          <span className="self-center lg:text-xl text-heading font-semibold whitespace-nowrap">
            PRISTINE RIDES
          </span>
        </Link>
        <div className="lg:block lg:w-auto" id="navbar-default">
          <ul className="lg:font-medium flex lg:p-0 lg:border-default rounded-base bg-neutral-secondary-soft lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-neutral-primary">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 mr-2 lg:mr-0 rounded hover:text-electric-blue hover:underline hover:underline-offset-8 ${pathname === "/" ? "text-electric-blue underline underline-offset-8 decoration-electric-blue" : "text-white bg-brand"}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/book"
                className="block bg-electric-blue box-border border border-transparent hover:bg-brand-strong py-2 px-2 lg:px-4 text-heading rounded hover:bg-blue-800"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
