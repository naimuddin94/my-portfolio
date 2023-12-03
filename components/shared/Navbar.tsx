import { navItems } from "@/utils/utils";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between ">
      <div>Portfolio</div>
      <div className="flex gap-4">
        {navItems?.map((item) => (
          <Link key={item.label} href={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
