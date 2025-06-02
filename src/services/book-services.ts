import { api } from "../utils/api";

export const getBooks = async () => {
  const res = await api.get<ResponseApi<Book[]>>("/v1/books");
  return res.data;
};
