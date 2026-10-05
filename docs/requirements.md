# Pristine Rides Website Requirements

Date: 2026-08-29
Version: 1.0
Status: Draft baseline for build and review

## 1) Product Summary

Pristine Rides needs a website to:

- Present car detailing services.
- Accept booking requests via a user form.
- Store customer and vehicle records for returning customers.
- Store customer email information for reminder and promotional messages.

## 2) Goals

- Make it easy for new customers to understand services and request appointments.
- Make repeat booking faster for returning customers with the same vehicle.
- Maintain a reusable customer database for operations and marketing outreach.

## 3) Technical Direction

- Frontend framework: React.js.
- Data storage: Non-relational database (NoSQL) for this phase.

## 4) Functional Requirements

### FR-001 Services Presentation

The website shall present detailing services in a clear and structured format.

Acceptance Criteria:

- Users can view a services page/section listing each detailing service.
- Each service includes at least: service name, short description, and base price or price range.
- Services content is readable on desktop and mobile.

### FR-002 Appointment Booking Form

The website shall provide a form for users to request a detailing appointment.

Acceptance Criteria:

- Form captures at least: customer name, email, phone number, vehicle information, preferred date/time, and requested service.
- Form performs client-side validation for required fields and basic format checks (email/phone).
- User receives a clear success or failure message after submission.

### FR-003 Store Customer Records

The system shall store customer records in a NoSQL data store.

Acceptance Criteria:

- A customer record can be created from booking submission data.
- Stored fields include at minimum: customer identity/contact fields and vehicle details.
- Duplicate handling strategy is defined (for example by email plus vehicle identifier).

### FR-004 Returning Customer Rebooking

The system shall support returning customers booking the same car more efficiently.

Acceptance Criteria:

- System can identify existing customers and their previously stored vehicle records.
- Booking workflow can reuse known customer/vehicle data instead of requiring full re-entry.
- New bookings are linked to an existing customer when a match is found.

### FR-005 Email Contact Storage for Outreach

The system shall store customer email data for reminders and promotional messaging.

Acceptance Criteria:

- Email address is stored with the customer profile.
- A customer contact preference/consent field is captured for promotional outreach.
- Stored data can be queried/exported for future reminder/promo campaigns.

### FR-006 Basic Admin Data Access

The business shall be able to view stored customer and booking data for operations.

Acceptance Criteria:

- There is at least one internal workflow (simple admin page or API endpoint) to retrieve booking/customer records.
- Data access is limited to authorized internal use.

## 5) Data Requirements

Minimum logical entities:

- Customer
  - customerId
  - fullName
  - email
  - phone
  - marketingConsent (boolean)
  - createdAt
  - updatedAt
- Vehicle
  - vehicleId
  - customerId
  - make
  - model
  - year
  - color (optional)
  - plateOrVin (recommended unique identifier when available)
- Appointment
  - appointmentId
  - customerId
  - vehicleId
  - serviceCode
  - preferredDateTime
  - status (requested, confirmed, completed, cancelled)
  - notes (optional)
  - createdAt

## 6) Non-Functional Requirements

### NFR-001 Privacy and Security (Baseline)

- Validate and sanitize form input.
- Protect stored customer contact data.
- Restrict internal data access.

### NFR-002 Usability

- Core pages and form should be mobile responsive.
- Form error states should be understandable and specific.

### NFR-003 Reliability

- Booking submission should be resilient to transient failures and return clear user feedback.

## 7) Out of Scope (Current Phase)

- Payment processing.
- Full CRM automation.
- Advanced marketing campaign tooling.

## 8) Open Decisions

- Final NoSQL provider selection (for example Firebase Firestore, MongoDB Atlas, or DynamoDB).
- Authentication approach for internal/admin data access.
- Email delivery platform for reminders/promos (if sending is added in a later phase).

## 9) Review Checklist Mapping

Use this section during reviews to mark implementation status.

- FR-001 Services Presentation: Not Started
- FR-002 Appointment Booking Form: Not Started
- FR-003 Store Customer Records: Not Started
- FR-004 Returning Customer Rebooking: Not Started
- FR-005 Email Contact Storage for Outreach: Not Started
- FR-006 Basic Admin Data Access: Not Started
- NFR-001 Privacy and Security: Not Started
- NFR-002 Usability: Not Started
- NFR-003 Reliability: Not Started
