import { motion } from "motion/react";
import type { LoginPayload } from "../types";
import ThemeSwitch from "../../../components/ThemeSwitch";

interface LoginPageProps {
  form: LoginPayload;
  loading: boolean;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  goToRegister: () => void;
}

const LoginPage = ({
  form,
  loading,
  error,
  onChange,
  onSubmit,
  goToRegister,
}: LoginPageProps) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white dark:bg-gray-900 dark:shadow-none shadow-xl w-full max-w-md p-8 flex flex-col relative transition-colors duration-300"
    >
      <div className="absolute top-4 right-4">
        <ThemeSwitch />
      </div>
      <h1 className="text-3xl font-extrabold text-blue-700 dark:text-blue-300 mb-2 text-center tracking-tight">
        Login to Book App
      </h1>
      <p className="text-blue-500 dark:text-blue-200 mb-7 text-center">
        Welcome back! Please login to continue.
      </p>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="email"
            className="block mb-1 font-semibold text-gray-700 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="username"
            placeholder="Enter your email"
            value={form.email}
            onChange={onChange}
            className="w-full px-4 py-2 rounded border border-blue-200 dark:border-gray-700 focus:border-blue-500 outline-none transition-colors duration-200 dark:bg-gray-800 dark:text-blue-50"
            disabled={loading}
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-1 font-semibold text-gray-700 dark:text-gray-200"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            value={form.password}
            onChange={onChange}
            className="w-full px-4 py-2 rounded border border-blue-200 dark:border-gray-700 focus:border-blue-500 outline-none transition-colors duration-200 dark:bg-gray-800 dark:text-blue-50"
            disabled={loading}
            required
          />
        </div>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-600 text-center"
          >
            {error}
          </motion.div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700 transition font-bold text-white py-2 rounded-xl shadow active:scale-95 cursor-pointer disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 transition-colors">
        Don&apos;t have an account yet?{" "}
        <button
          onClick={goToRegister}
          type="button"
          className="text-blue-700 dark:text-blue-300 font-semibold underline underline-offset-2 hover:text-blue-900 dark:hover:text-blue-100 cursor-pointer transition-colors"
        >
          Register here
        </button>
      </div>
    </motion.div>
  </div>
);

export default LoginPage;
