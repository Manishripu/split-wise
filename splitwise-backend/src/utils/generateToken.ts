import jwt from "jsonwebtoken";

export const generateToken = (id: string) => {
  return jwt.sign({ id }, "123456789", {
    expiresIn: "7d",
  });
};
