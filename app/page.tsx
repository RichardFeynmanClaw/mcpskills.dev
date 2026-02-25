import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Search, BookOpen, Plus } from "lucide-react";
import ServerCard from "@/components/ServerCard";
import { SERVERS, CATEGORIES, getFeaturedServers, getCategories } from "@/data/servers";

export const metadata: Metadata = {
  title: "MCPHub — The MCP Server Directory",
  description:
    "Discover, install, and share MCP (Model Context Protocol) servers. Browse 60+ servers for Claude, Cursor, Windsurf, and every AI assistant.",
};

export default function HomePage() {
  const featured = getFeaturedServers();
  const categories = getCategories();
  const totalServers = SERVERS.length;

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6">
        {/* background glow */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, #7c3aed33 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-900/40 border border-brand-700/50 text-brand-300 text-sm px-4 py-2 rounded-full mb-6">
            <Zap size={14} />
            <span>The Universal Tool Layer for AI Assistants</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
            Find the right{" "}
            <span className="gradient-text">MCP Server</span>
            <br />
            for any workflow
          </h1>
          <p className="text-[#8888aa] text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Browse {totalServers}+ MCP (Model Context Protocol) servers. Connect Claude and any AI
            assistant to databases, APIs, cloud platforms, and developer tools — in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/servers"
              className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-colors glow"
            >
              Browse All Servers <ArrowRight size={16} />
            </Link>
            <Link
              href="/blog/what-is-mcp"
              className="border border-[#1e1e2e] hover:border-brand-700 text-[#8888aa] hover:text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-colors"
            >
              <BookOpen size={16} /> What is MCP?
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="max-w-3xl mx-auto mt-14 grid grid-cols-3 gap-4 text-center">
          {[
            { value: `${totalServers}+`, label: "MCP Servers" },
            { value: `${Object.keys(CATEGORIES).length}`, label: "Categories" },
            { value: "Free", label: "Always free" },
          ].map((s) => (
            <div key={s.label} className="bg-[#12121a] border border-[#1e1e2e] rounded-xl py-4 px-3">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-[#8888aa] text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Browse by Category</h2>
          <Link href="/servers" className="text-brand-400 hover:text-brand-300 text-sm flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {categories.map((cat) => {
            const info = CATEGORIES[cat];
            const count = SERVERS.filter((s) => s.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/category/${cat}`}
                className="card-hover bg-[#12121a] border border-[#1e1e2e] rounded-xl p-4 text-center flex flex-col items-center gap-2"
              >
                <span className="text-2xl">{info.icon}</span>
                <span className="text-sm font-medium text-white">{info.label}</span>
                <span className="text-xs text-[#8888aa]">{count} servers</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED SERVERS */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Featured Servers</h2>
          <Link href="/servers" className="text-brand-400 hover:text-brand-300 text-sm flex items-center gap-1">
            View all {totalServers} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.slice(0, 9).map((server) => (
            <ServerCard key={server.slug} server={server} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">How MCP Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              icon: <Search size={22} />,
              title: "Find a server",
              desc: "Browse MCPHub by category or search for the tool you need.",
            },
            {
              step: "02",
              icon: <Zap size={22} />,
              title: "Run the install command",
              desc: "One npx or uvx command. No complex setup. Works in 30 seconds.",
            },
            {
              step: "03",
              icon: <ArrowRight size={22} />,
              title: "Use it in Claude",
              desc: "Restart Claude Desktop and your new tools appear automatically.",
            },
          ].map((step) => (
            <div
              key={step.step}
              className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-6 relative"
            >
              <span className="text-5xl font-black text-[#1e1e2e] absolute top-4 right-4">
                {step.step}
              </span>
              <div className="bg-brand-900/40 text-brand-400 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-[#8888aa] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-brand-900/40 to-[#12121a] border border-brand-700/30 rounded-2xl p-10">
          <Plus size={32} className="text-brand-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Built an MCP Server?</h2>
          <p className="text-[#8888aa] mb-6">
            Submit your server to MCPHub and reach thousands of developers looking for new tools.
          </p>
          <Link
            href="/submit"
            className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-xl font-medium inline-flex items-center gap-2 transition-colors"
          >
            Submit Your Server <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
