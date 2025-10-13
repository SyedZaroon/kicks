"use client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function SimpleDropdown() {
  const router = useRouter();
  const pathname = usePathname();

  const links = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacypolicy", label: "Privacy Policy" },
    { href: "/termsconditions", label: "Terms & Conditions" },
  ];

  return (
    <div className="w-full">
      {/* Mobile Dropdown */}
      <select
        value={pathname}
        onChange={(e) => router.push(e.target.value)}
        className="
          text-[var(--color-dark-gray)] font-rubik text-sm font-semibold w-full
          rounded-[48px] border-[1px] border-[var(--color-dark-gray)]
          p-4 focus:outline-none focus:border-[var(--color-blue)] xl:hidden
        "
        id="sidebar-dropdown"
        name="sidebar-dropdown"
      >
        {links.map((link) => (
          <option key={link.href} value={link.href}>
            {link.label}
          </option>
        ))}
      </select>

      {/* Desktop Links */}
      <ul className="hidden xl:flex flex-col text-sm font-semibold font-rubik">
        {links.map((link) => (
          <li
            key={link.href}
            className={`py-4 px-5 transition-colors duration-200 ${
              pathname === link.href
                ? "text-[var(--color-blue)] border-l-3 border-[var(--color-blue)]"
                : "text-[var(--color-dark-gray)] hover:text-[var(--color-blue)]"
            }`}
          >
            <Link
              href={link.href}
              className={`transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[var(--color-blue)] "
                  : "text-[var(--color-dark-gray)] hover:text-[var(--color-blue)]"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
