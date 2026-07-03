import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

type FieldErrorCode = "required" | "invalid";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { name, email, message } = body;
  const errors: Partial<Record<"name" | "email" | "message", FieldErrorCode>> = {};

  if (!isNonEmptyString(name)) {
    errors.name = "required";
  }
  if (!isNonEmptyString(email)) {
    errors.email = "required";
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.email = "invalid";
  }
  if (!isNonEmptyString(message)) {
    errors.message = "required";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const submission = {
    name: (name as string).trim(),
    email: (email as string).trim(),
    message: (message as string).trim(),
    receivedAt: new Date().toISOString(),
  };

  console.log("Nuevo mensaje de contacto:", submission);
  return NextResponse.json({ success: true });
}
