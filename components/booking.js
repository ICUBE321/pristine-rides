import * as z from "zod";
import emailjs from "@emailjs/browser";

const AppointmentSchema = z.object({
  name: z.string().nonempty(),
  email: z.email().nonempty(),
  phone: z.e164(),
  make: z.string(),
  model: z.string(),
  year: z.string(),
  service: z.string(),
  date: z.string(),
  message: z.string(),
  promo: z.boolean(),
});

export function validateAppointment(appointment) {
  try {
    AppointmentSchema.parse(appointment);
    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, issues: error.issues };
    } else {
      return { success: false, error: error };
    }
  }
}

export async function sendEmail(appointment) {
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userID = process.env.NEXT_PUBLIC_API_KEY;

  const emailParams = {
    name: appointment.name,
    service: appointment.service,
    date: appointment.date,
    email: appointment.email,
    phone: appointment.phone,
    make: appointment.make,
    model: appointment.model,
    year: appointment.year,
    message: appointment.message,
    promo: appointment.promo ? "Yes" : "No",
  };

  try {
    const response = await emailjs.send(
      serviceID,
      templateID,
      emailParams,
      userID,
    );

    return { status: response.status, text: response.text };
  } catch (error) {
    return { status: 500, error: error };
  }
}

export function getMinimumDateTime() {
  const minimumDateTime = new Date();
  minimumDateTime.setDate(minimumDateTime.getDate() + 1);
  minimumDateTime.setHours(0, 0, 0, 0);

  const minDateTime = new Date(
    minimumDateTime.getTime() - minimumDateTime.getTimezoneOffset() * 60_000,
  )
    .toISOString()
    .slice(0, 16);

  return minDateTime;
}
