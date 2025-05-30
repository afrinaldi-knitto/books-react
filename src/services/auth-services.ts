import axios from "axios";
import type { LoginPayload, LoginResponse } from "../features/login/types";
import type { ResgisterPayload } from "../features/register/types";

export const loginApi = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const res = await axios.post<LoginResponse>(
    `${import.meta.env.VITE_BASE_URL}/login`,
    payload
  );

  return res.data;
};

export const registerApi = async (
  payload: ResgisterPayload
): Promise<{ message: string }> => {
  const res = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/register`,
    payload
  );

  return res.data;
};
