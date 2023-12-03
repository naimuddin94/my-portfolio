"use client";
import { navItems } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  

  return (
    <nav className="flex justify-around py-3 shadow sticky top-0 z-50 bg-white w-full">
      <h2 className="text-2xl font-black text-gray-600">Portfolio</h2>
      <div className="flex gap-4">
        {navItems?.map((item) => (
          <Link
            key={item.label}
            href={item.path}
            className={`px-4 py-1 rounded text-gray-600 font-medium hover:bg-primary hover:text-white ${pathname === item.path && "bg-secondary text-white"}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
