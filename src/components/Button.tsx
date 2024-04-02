"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";
import Spinner from "./Spinner";

export default function Button({
  variant = "primary",
  type,
  onClick,
  href,
  children,
  className,
}: {
  variant?: "primary" | "outline";
  type?: "button" | "submit";
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { pending } = useFormStatus();
  useEffect(() => {
    console.log(pending);
  }, [pending]);

  const classes = {
    common:
      "text-md font-semibold py-3 px-4 rounded-full border-2 duration-200 transition-all flex items-center justify-center gap-2",
    primary: "bg-black text-white border-black hover:bg-white hover:text-black",
    outline:
      "bg-white text-black border-gray-300 hover:bg-gray-300 hover:text-white",
  };

  return href ? (
    <Link
      href={href}
      className={`${classes["common"]} ${classes[variant]} ${className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      type={type}
      aria-disabled={pending}
      disabled={pending}
      className={`${classes["common"]} ${classes[variant]} ${className} disabled:bg-gray-200 disabled:border-gray-200`}
    >
      {pending ? <Spinner /> : children}
    </button>
  );
}
