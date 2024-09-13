"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: "/images/profile.jpg" },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: "/images/profile.jpg",
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: "/images/profile.jpg",
  },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            style={{ fontWeight: pathName === link.href ? "700" : "500" }}
          >
            <Image src={LinkIcon} width={100} height={100} alt="extra" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
