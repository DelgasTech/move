"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiMessageCircle, FiChevronDown } from "react-icons/fi";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Modalidades", href: "/#modalidades" },
  { label: "Horários", href: "/#horarios" },
  { label: "Planos", href: "/#planos" },
  { label: "Unidades", href: "/unidades" },
  { label: "Anuncie", href: "/anuncie" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { label: "Contato", href: "/#cta" },
];

const parceiros = [
  { label: "Moutonnée Move", href: "/moutonnee" },
  { label: "Smash Move", href: "/smash" },
];

const WA_NUMBER = "5511910204226";
const WA_MESSAGE = encodeURIComponent("Olá! Tenho interesse em conhecer os planos da Move Academia.");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [parceirosOpen, setParceirosOpen] = useState(false);
  const parceirosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (parceirosRef.current && !parceirosRef.current.contains(e.target as Node)) {
        setParceirosOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-bg/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo height={32} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            {/* Parceiros dropdown */}
            <div ref={parceirosRef} className="relative">
              <button
                onClick={() => setParceirosOpen(!parceirosOpen)}
                className="flex items-center gap-1 text-gray-300 hover:text-primary transition-colors text-sm font-medium"
              >
                Parceiros
                <FiChevronDown className={`w-3.5 h-3.5 transition-transform ${parceirosOpen ? "rotate-180" : ""}`} />
              </button>
              {parceirosOpen && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-dark-bg/98 backdrop-blur-md border border-white/10 rounded-xl shadow-xl py-2 min-w-[160px]">
                  {parceiros.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      onClick={() => setParceirosOpen(false)}
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:text-primary hover:bg-white/5 transition-colors"
                    >
                      {p.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            <FiMessageCircle className="w-4 h-4" />
            Fale pelo WhatsApp
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-bg/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors text-base font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-white/10 pt-2">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 px-0">Parceiros</p>
              {parceiros.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="block text-gray-300 hover:text-primary transition-colors text-base font-medium py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {p.label}
                </a>
              ))}
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-4 py-3 rounded-full mt-2"
              onClick={() => setMenuOpen(false)}
            >
              <FiMessageCircle className="w-4 h-4" />
              Fale pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}