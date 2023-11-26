import Link from "next/link";
import ActiveLink from "./ActiveLink";

export default function AdminNav() {
  const navLinks = [
    { label: "Categories", href: "/admin/categories" },
    { label: "Tags", href: "/admin/tags" },
  ];

  return (
    <header className="h-full w-64  p-6 bg-[#363636]">
      <Link href={"/admin"}>
        <h1 className="text-[#ac362e] text-4xl mt-5">BackOffice</h1>
      </Link>

      <div className="flex flex-col mt-10">
        {navLinks.map((l) => (
          <ActiveLink
            key={l.href}
            href={l.href}
            className="p-2 rounded text-white"
            activeClassName="bg-slate-200"
          >
            {l.label}
          </ActiveLink>
        ))}
      </div>
    </header>
  );
}
