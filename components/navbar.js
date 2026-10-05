"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-950 sticky w-full z-20 top-0 inset-s-0 border-default">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="pristine-rides-logo.svg"
            className="h-7"
            alt="Pristine Rides Logo"
          />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            PRISTINE RIDES
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <div className="flex mr-12">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded hover:text-electric-blue hover:underline hover:underline-offset-8 ${pathname === "/" ? "text-electric-blue underline underline-offset-8 decoration-electric-blue" : "text-white bg-brand"}`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </div>
            <li>
              <a
                href="/book"
                className="block bg-electric-blue box-border border border-transparent hover:bg-brand-strong py-2 px-4 text-heading rounded hover:bg-blue-800"
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
