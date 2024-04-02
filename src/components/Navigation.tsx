import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

export default function Navigation() {
  const navItems: {
    label: string;
    route: string;
  }[] = [
    {
      label: "Home",
      route: "/",
    },
    // {
    //   label: "Solutions",
    //   route: "/solutions",
    // },
  ];

  return (
    <div className="w-full py-2">
      <div className="container mx-auto flex items-center px-2">
        <Link href="/">
          <Image
            width={103.66}
            height={36}
            src="/parc-insights-logo.png"
            alt="Logo image."
          />
        </Link>

        <nav className="flex items-center gap-4 ml-auto mt-2">
          {navItems.map(({ label, route }) => {
            return (
              <Link
                key={route}
                href={route}
                className="font-semibold duration-200 transition-colors hover:text-gray-300"
              >
                {label}
              </Link>
            );
          })}
          <Button className="ml-2" href="/strategy-call">
            Get in touch
          </Button>
        </nav>
      </div>
    </div>
  );
}
