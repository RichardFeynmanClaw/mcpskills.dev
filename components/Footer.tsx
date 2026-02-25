import Link from "next/link";
import { Zap } from "lucide-react";
import { CATEGORIES, getCategories } from "@/data/servers";

export default function Footer() {
  const cats = getCategories().slice(0, 8);
  return (
    <footer className="border-t border-[#1e1e2e] bg-[#0a0a0f] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-3">
              <span className="bg-brand-600 text-white rounded-lg p-1"><Zap size={16} /></span>
              <span className="gradient-text">MCPHub</span>
            </Link>
            <p className="text-[#8888aa] text-sm leading-relaxed">
              The largest directory of MCP servers. Find, install, and share tools for Claude and every AI assistant.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-white">Categories</h4>
            <ul className="space-y-2">
              {cats.map((c) => (
                <li key={c}>
                  <Link href={`/category/${c}`} className="text-[#8888aa] hover:text-white text-sm transition-colors">
                    {CATEGORIES[c].icon} {CATEGORIES[c].label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-white">Resources</h4>
            <ul className="space-y-2">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/blog/what-is-mcp", label: "What is MCP?" },
                { href: "/blog/getting-started-mcp-guide", label: "Getting Started" },
                { href: "/submit", label: "Submit a Server" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#8888aa] hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://modelcontextprotocol.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8888aa] hover:text-white text-sm transition-colors"
                >
                  Official MCP Docs ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-white">Newsletter</h4>
            <p className="text-[#8888aa] text-sm mb-3">New MCP servers, weekly.</p>
            <form action="/api/newsletter" method="POST" className="flex gap-2">
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 bg-[#12121a] border border-[#1e1e2e] rounded-lg px-3 py-2 text-sm text-white placeholder-[#8888aa] focus:outline-none focus:border-brand-600 min-w-0"
              />
              <button
                type="submit"
                className="bg-brand-600 hover:bg-brand-500 text-white px-3 py-2 rounded-lg text-sm transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[#1e1e2e] flex flex-col sm:flex-row justify-between items-center gap-4 text-[#8888aa] text-xs">
          <p>© 2025 MCPHub. Not affiliated with Anthropic.</p>
          <p>
            Built with ❤️ for the MCP community ·{" "}
            <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              modelcontextprotocol.io
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
