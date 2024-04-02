import { FieldError } from "react-hook-form";

export default function Input({
  label,
  name,
  type,
  errors,
  className,
  required,
}: {
  label: string;
  name: string;
  type: "text" | "email" | "phone";
  errors: string[];
  className?: string;
  required?: boolean;
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className="font-semibold tracking-tight mb-2">
        {label}
      </label>
      <input
        required={required}
        id={name}
        name={name}
        type={type}
        className="text-lg border-2 border-gray-200 rounded-md p-2 outline-none duration-200 transition-colors hover:focus:border-purple-400"
      />
      {!!errors?.length &&
        errors.map((msg, index) => {
          return (
            <p key={index} className="text-xs text-red-500">
              {msg}
            </p>
          );
        })}
    </div>
  );
}
