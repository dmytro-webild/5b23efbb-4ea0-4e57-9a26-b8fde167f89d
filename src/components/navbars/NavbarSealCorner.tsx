"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type NavItem = { name: string; href: string };

type NavbarProps = {
  brand?: string;
  navItems?: NavItem[];
  cta?: { text: string; href: string };
  menuText?: string;
  closeText?: string;
};

const defaultNavItems: NavItem[] = [
  { name: "الرئيسية", href: "#hero" },
  { name: "الخدمات", href: "#services" },
  { name: "الإطلالات", href: "#gallery" },
  { name: "الباقات", href: "#packages" },
  { name: "طلب الموعد", href: "#appointment" },
];

const NavbarSealCorner = ({
  brand = "لُما | LUMA",
  navItems = defaultNavItems,
  cta = { text: "اطلبي موعدك", href: "#appointment" },
  menuText = "القائمة",
  closeText = "إغلاق",
}: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#231713]/95 text-[#FAF6F2] backdrop-blur-md border-b border-[#E4D9CC]/15 shadow-sm">
      <div className="mx-auto flex h-16 sm:h-20 w-[var(--container)] items-center justify-between gap-4">
        {/* Brand Name */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-2xl font-extrabold font-serif text-[#FAF6F2] hover:text-[#C59B63] transition-colors"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-normal">{brand}</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="التنقل الرئيسي">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#FAF6F2]/85 hover:text-[#B87B6C] transition-colors py-1"
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
              className="btn-primary py-2 px-5 text-sm font-bold shadow-sm"
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
            className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/20 text-[#FAF6F2] lg:hidden focus:outline-none focus:ring-2 focus:ring-[#B87B6C]"
          >
            <div className={`h-0.5 w-5 bg-current transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`h-0.5 w-5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <div className={`h-0.5 w-5 bg-current transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
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
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#231713] px-[var(--gutter)] py-4 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-base font-medium text-[#FAF6F2]/90 hover:bg-white/10 hover:text-[#B87B6C] transition-colors"
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
