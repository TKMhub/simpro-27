import Image from "next/image";
import header_logo from "@/public/Simplo_white_main_sub.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center py-5 px-24 bg-zinc-800 z-50">
      <Image src={header_logo} alt="headerLogo" className="h-16 w-auto" />
      <nav className="flex space-x-10">
        <Button variant="link" className="text-white text-xl">
          Contact
        </Button>
        <Button className="text-white text-xl" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
      </nav>
    </header>
  );
}
