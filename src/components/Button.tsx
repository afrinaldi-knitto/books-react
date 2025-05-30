import type React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "danger";
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
}: ButtonProps) {
  const baseStyle =
    "px-4 py-2 rounded font-semibold transition-all focus:outline-none";
  const variantStyle =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
      : "bg-red-600 text-white hover:bg-red-700 cursor-pointer";

  const disabledStyle =
    "bg-gray-400 text-gray-200 cursor-not-allowed hover:bg-gray-400";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${disabled ? disabledStyle : variantStyle}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
