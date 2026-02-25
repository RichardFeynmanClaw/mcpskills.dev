"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/servers", label: "MCP Servers" },
    { href: "/skills", label: "Skills" },
    { href: "/blog", label: "Blog" },
    { href: "/submit", label: "Submit" },
  ];
  return (
    <nav className="sticky top-0 z-50 border-b border-[#1e1e2e] bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="bg-brand-600 text-white rounded-lg p-1">
              <Zap size={18} />
            </span>
            <span className="gradient-text">MCPSkills</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[#8888aa] hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/submit"
              className="bg-brand-600 hover:bg-brand-500 text-white text-sm px-4 py-2 rounded-lg transition-colors"
            >
              + Submit Server
            </Link>
          </div>
          <button
            className="md:hidden text-[#8888aa]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#1e1e2e] bg-[#0a0a0f] px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#8888aa] hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/submit"
            className="bg-brand-600 text-white text-sm px-4 py-2 rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            + Submit Server
          </Link>
        </div>
      )}
    </nav>
  );
}
