import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <Link href="/">
        <Image
          src="/goatius.png"
          height={60}
          width={60}
          alt="logo"
          className="rounded-full"
          priority
        />
      </Link>
    </header>
  );
}

export default Header;
