import { collections, connect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { email, password, image } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  const userData = {
    email,
    password: hashedPassword,
    image,
    createdAt: new Date().toISOString(),
    role: "user",
  };
  const result = await connect(collections.USERS).insertOne(userData);

  return Response.json(result);
}
