import type { LoginPayload, LoginResponse } from "../features/login/types";
import type { RegisterPayload } from "../features/register/types";
import { api, authApi } from "../utils/api";

export const loginApi = async (payload: LoginPayload) => {
  const res = await api.post<LoginResponse>("/login", payload);
  return res.data;
};

export const registerApi = async (payload: RegisterPayload) => {
  const res = await api.post<{ message: string }>("/register", payload);
  return res.data;
};

export const getMeApi = async () => {
  const res = await authApi.get<{ id: number; role: string }>("/me");
  return res.data;
};
