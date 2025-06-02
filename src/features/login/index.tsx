import { useState } from "react";
import LoginPage from "./page/login-page";
import { getMeApi, loginApi } from "../../services/auth-services";
import type { LoginPayload } from "./types";
import { useNavigate } from "react-router";

const initialPayload: LoginPayload = { email: "", password: "" };

const Login = () => {
  const [form, setForm] = useState<LoginPayload>(initialPayload);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.email.trim() || !form.password.trim()) {
      setError("Email dan password wajib diisi.");
      return;
    }
    setLoading(true);
    try {
      const res = await loginApi(form);
      const token = res.data.token;
      localStorage.setItem("token", token);
      try {
        const meResponse = await getMeApi();
        localStorage.setItem("role", meResponse.role);
        if (meResponse.role === "admin") {
          navigate("/admin", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      } catch {
        localStorage.removeItem("token");
        setError("Autentikasi gagal, silakan login kembali.");
      }
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Login gagal, silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <LoginPage
      form={form}
      loading={loading}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
      goToRegister={goToRegister}
    />
  );
};

export default Login;
