import { object, string, TypeOf } from "zod";

export const createUser = object({
  name: string({ required_error: "Name is required" }).min(
    1,
    "Name is required",
  ),
  email: string({ required_error: "Email is required" }).min(
    1,
    "Invalid Email",
  ),
  password: string({ required_error: "Password is required" }).min(
    1,
    "Password Incorrect",
  ),
});

export const loginUser = object({
  email: string({ required_error: "Email is required" }).min(
    1,
    "Invalid Email",
  ),
  password: string({ required_error: "Password is required" }).min(
    1,
    "Password Incorrect",
  ),
});

export type CreateUserInput = TypeOf<typeof createUser>;
export type LoginUserInput = TypeOf<typeof loginUser>;
