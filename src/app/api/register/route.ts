export async function POST(req: Request) {
  const body = (await req.json()) as {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    sendEmailUpdates: boolean;
    isAgreedToTerms: boolean;
    gender: "male" | "female";
  };

  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8,}$/;

  if (body.password !== body.confirmPassword) {
    return Response.json(
      {
        status: 400,
        message: "Password and confirm password must be equal.",
      },
      { status: 400 },
    );
  } else if (!passwordPattern.test(body.password)) {
    return Response.json(
      {
        status: 400,
        message:
          "Password must be at least 8 characters long, include uppercase and lowercase letters, at least one number, and one special character.",
      },
      { status: 400 },
    );
  }

  if (!body.phone.startsWith("+62")) {
    return Response.json(
      { status: 400, message: "Phone must start with +62." },
      { status: 400 },
    );
  }

  if (!body.isAgreedToTerms) {
    return Response.json(
      { status: 403, message: "You must agree to the terms to proceed." },
      { status: 403 },
    );
  }

  if (body.firstName.length < 5 || body.lastName.length < 5) {
    return Response.json(
      {
        status: 400,
        message: "First name and last name must be at least 5 characters long.",
      },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(body.email)) {
    return Response.json(
      { status: 400, message: "Email is not valid." },
      { status: 400 },
    );
  }

  if (body.gender !== "male" && body.gender !== "female") {
    return Response.json(
      { status: 400, message: "Gender must be either 'male' or 'female'." },
      { status: 400 },
    );
  }

  return Response.json(
    { status: 200, data: JSON.stringify(body) },
    { status: 200 },
  );
}
