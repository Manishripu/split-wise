import { api } from "../api/axios";
import { User } from "../models/user.model";

interface LoginResponse {
  user: User;
  token: string;
  message: string;
}
interface RegisterResponse {
  user: User;
  token: string;
  message: string;
}

export const loginApi = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/api/auth/login", {
    email,
    password,
  });
  return response.data;
};

export const registerApi = async (
  name: string,
  email: string,
  password: string
): Promise<RegisterResponse> => {
  const response = await api.post<LoginResponse>("/api/auth/login", {
    name,
    email,
    password,
  });
  return response.data;
};
