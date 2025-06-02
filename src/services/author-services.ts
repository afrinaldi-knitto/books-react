import { api } from "../utils/api";

export const getAuthors = async () => {
  const res = await api.get<ResponseApi<Author[]>>("/v1/authors");
  return res.data;
};
