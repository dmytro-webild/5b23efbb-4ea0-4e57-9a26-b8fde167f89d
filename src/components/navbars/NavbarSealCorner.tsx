"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type NavItem = { name: string; href: string };

type NavbarSealCornerProps = {
  brand?: string;
  navItems?: NavItem[];
  cta?: { text: string; href: string };
  menuText?: string;
  closeText?: string;
  delay?: number;
};

const defaultNavItems: NavItem[] = [
  { name: "الرئيسية", href: "#hero" },
  { name: "خدماتنا", href: "#services" },
  { name: "معرض الأعمال", href: "#gallery" },
  { name: "خطوات الطلب", href: "#process" },
  { name: "تواصل معنا", href: "#contact-plum-form" },
];

const NavbarSealCorner = ({
  brand = "الأرائك للمناسبات",
  navItems = defaultNavItems,
  cta = { text: "اطلب عرض سعر", href: "#contact-plum-form" },
  menuText = "القائمة",
  closeText = "إغلاق",
}: NavbarSealCornerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-deep/95 text-deep-foreground backdrop-blur-md border-b border-white/10 shadow-sm">
      {/* Top Disclaimer Bar */}
      <div className="bg-primary text-primary-foreground py-1 px-4 text-center text-xs font-semibold tracking-normal border-b border-primary/20">
        <div className="mx-auto flex items-center justify-center gap-2">
          <span className="inline-block size-2 rounded-full bg-primary-foreground animate-pulse" />
          <span>نموذج مقترح للعرض — غير رسمي</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex h-16 w-[var(--container)] items-center justify-between gap-4">
        {/* Brand Name */}
        <a href="#hero" className="flex items-center gap-2 text-xl font-bold tracking-normal text-primary hover:opacity-90 transition-opacity">
          <span className="font-serif text-2xl">{brand}</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="التنقل الرئيسي">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-deep-foreground/90 hover:text-primary transition-colors py-1"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {cta && (
            <a
              href={cta.href}
              className="btn-primary py-1.5 px-4 text-sm font-semibold shadow-sm"
            >
              {cta.text}
            </a>
          )}

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? closeText : menuText}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/20 text-deep-foreground lg:hidden"
          >
            <div className={`h-0.5 w-5 bg-current transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <div className={`h-0.5 w-5 bg-current transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-deep px-[var(--gutter)] py-4 lg:hidden"
          >
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-deep-foreground/90 hover:bg-white/10 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavbarSealCorner;
