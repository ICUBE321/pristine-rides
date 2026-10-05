# Pristine Rides

Pristine Rides is a website for a professional vehicle-detailing service. It
showcases detailing options and starting prices, and lets customers submit an
appointment request with their contact details, vehicle information, preferred
date, and service selection. Booking requests are sent through EmailJS.

The site is built with Next.js, React, and Tailwind CSS. The main pages are:

- `/` — service overview and booking call to action
- `/services` — detailing services
- `/book` — appointment request form

## Run locally

### Requirements

- Node.js 24 or later
- npm

Install the dependencies:

```bash
npm ci
```

To enable booking form submissions locally, create a `.env.local` file in the
project root and set the EmailJS values:

```dotenv
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY=your_emailjs_public_key
```

These `NEXT_PUBLIC_` values are made available to browser code. Use only the
EmailJS public API key here; never put private credentials or secrets in a
`NEXT_PUBLIC_` variable.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and run for production

Create an optimized production build:

```bash
npm run build
```

Start the production server locally after building:

```bash
npm start
```

The production server uses port 3000 by default. Set the EmailJS environment
variables in the environment where the application runs if booking submissions
should be enabled.

## Deployment

Pristine Rides is deployed on [Vercel](https://vercel.com/). Configure the
EmailJS environment variables in the Vercel project settings for deployments
that need to send booking requests.
