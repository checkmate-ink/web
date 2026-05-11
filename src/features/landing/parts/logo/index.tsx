import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className="flex flex-row gap-2">
      <Image src="/images/logo.png" alt="" width={32} height={32} />
      <span
        className={cn(
          "font-heading text-deep-brown",
          className,
        )}
      >
        check
        <span className="font-bold italic">mate.</span>
      </span>
    </Link>
  );
}
