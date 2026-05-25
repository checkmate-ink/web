"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/features/landing/parts/logo";

import { LanguageSelect } from "./parts/language-select";

export function NavBar() {
  const t = useTranslations("landing.nav");
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: t("features") },
    { href: "#marketplace", label: t("marketplace") },
    { href: "#how-it-works", label: t("howItWorks") },
    { href: "#about", label: t("about") },
    { href: "#partners", label: t("partners") },
  ];

  return (
    <nav className="flex h-[72px] w-full items-center justify-between px-5 md:px-10 lg:px-20">
      <div className="flex min-w-0 flex-1 items-center">
        <Logo className="text-2xl" />
      </div>

      <div className="hidden items-center lg:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            <Button variant="ghost" size="sm">
              {link.label}
            </Button>
          </a>
        ))}
      </div>

      <div className="hidden min-w-0 flex-1 justify-end lg:flex">
        <LanguageSelect />
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>
        <SheetContent side="right" className="bg-cream-background">
          <SheetHeader>
            <SheetTitle>{t("menu")}</SheetTitle>
          </SheetHeader>
          {navLinks.map((link) => (
            <SheetClose
              key={link.href}
              nativeButton={false}
              render={<a href={link.href} />}
            >
              <Button variant="ghost" className="w-full justify-start">
                {link.label}
              </Button>
            </SheetClose>
          ))}
          <SheetFooter className="border-t">
            <LanguageSelect />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
