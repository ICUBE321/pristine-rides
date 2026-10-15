import { expect, test, vi } from "vitest";
import { getMinimumDateTime, validateAppointment } from "@/components/booking";

test("validating each booking field works", () => {
  var result = validateAppointment({
    name: "John Doe",
    email: "johndoe@yahoo.com",
    phone: "+1613234567",
    make: "Mazda",
    model: "Mazda3",
    year: "2024",
    service: "Sedan",
    date: "2026-10-16T14:30",
    message: "Extra scrubs",
    promo: true,
  });

  expect(result.success).toBe(true);

  result = validateAppointment({
    name: "John Doe",
    email: "johndoeyahoo.com",
    phone: "+1613234567",
    make: "Mazda",
    model: "Mazda3",
    year: "2024",
    service: "Sedan",
    date: "2026-10-16T14:30",
    message: "Extra scrubs",
    promo: true,
  });

  expect(result.success).toBe(false);
  expect(result.issues).toEqual(
    expect.arrayContaining([expect.objectContaining({ path: ["email"] })]),
  );

  result = validateAppointment({
    name: "John Doe",
    email: "johndoe@yahoo.com",
    phone: "613234test",
    make: "Mazda",
    model: "Mazda3",
    year: "2024",
    service: "Sedan",
    date: "2026-10-16T14:30",
    message: "Extra scrubs",
    promo: true,
  });
  expect(result.success).toBe(false);
  expect(result.issues).toEqual(
    expect.arrayContaining([expect.objectContaining({ path: ["phone"] })]),
  );

  result = validateAppointment({
    name: "",
    email: "",
    phone: "",
    make: "Mazda",
    model: "Mazda3",
    year: "2024",
    service: "Sedan",
    date: "2026-10-16T14:30",
    message: "Extra scrubs",
    promo: true,
  });

  expect(result.success).toBe(false);
  expect(result.issues.map((issue) => issue.path[0])).toEqual(
    expect.arrayContaining(["name", "email", "phone"]),
  );

  var result = validateAppointment({
    name: "John Doe",
    email: "johndoe@.com",
    phone: "613234567",
    make: "Mazda",
    model: "Mazda3",
    year: "2024",
    service: "Sedan",
    date: "2026-10-16T14:30",
    message: "Extra scrubs",
    promo: true,
  });

  expect(result.success).toBe(false);
  expect(result.issues.map((issue) => issue.path[0])).toEqual(
    expect.arrayContaining(["email", "phone"]),
  );

  var result = validateAppointment({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "+1613234567",
    make: "Mazda",
    model: "Mazda3",
    year: "2024",
    service: "Sedan",
    date: "2026-10-16 14:30",
    message: "Extra scrubs",
    promo: true,
  });

  expect(result.success).toBe(false);
  expect(result.issues.map((issue) => issue.path[0])).toEqual(
    expect.arrayContaining(["date"]),
  );
});

test("returns tomorrow at local midnight", () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 9, 15, 16, 45));

  try {
    expect(getMinimumDateTime()).toBe("2026-10-16T00:00");
  } finally {
    vi.useRealTimers();
  }
});
