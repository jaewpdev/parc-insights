import { FieldError } from "react-hook-form";

export default function Textarea({
  label,
  name,
  // register,
  // errors,
  className,
}: {
  label: string;
  name: string;
  // register: any;
  // errors: FieldError | undefined;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="font-semibold tracking-tight">
        {label}
      </label>
      <textarea
        rows={4}
        id={name}
        name={name}
        // {...register(name)}
        className="text-lg border-2 border-gray-200 rounded-md p-2 outline-none duration-200 transition-colors hover:focus:border-purple-400 resize-none"
      />
      {/* {errors && <p>{errors.message}</p>} */}
    </div>
  );
}
