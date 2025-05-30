import { useState } from "react";
import { useNavigate } from "react-router";
import { useToast } from "../../hooks/use-toast";
import RegisterPage from "./page/register-page";
import { registerApi } from "../../services/auth-services";

const Register = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { showToast } = useToast();

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
      const res = await registerApi(form);
      showToast(res.message);
      navigate("/login");
    } catch (err: any) {
      if (
        err.response &&
        err.response.data &&
        (err.response.data.error || err.response.data.message)
      ) {
        setError(err.response.data.error || err.response.data.message);
      } else {
        setError("Register gagal, silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <RegisterPage
      form={form}
      loading={loading}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
      goToLogin={goToLogin}
    />
  );
};

export default Register;
