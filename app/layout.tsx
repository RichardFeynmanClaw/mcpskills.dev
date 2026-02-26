import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mcpskills.app"),
  title: {
    default: "MCPSkills — MCP Servers & AI Skills Directory",
    template: "%s | MCPSkills",
  },
  description:
    "The largest directory of MCP servers, OpenClaw Skills, and AI extensions. Discover, install, and share tools for Claude, Cursor, and every AI assistant.",
  keywords: ["MCP", "Model Context Protocol", "OpenClaw Skills", "Claude Skills", "AI tools", "MCP servers", "AI agents", "AI extensions"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mcpskills.app",
    siteName: "MCPSkills",
    title: "MCPSkills — MCP Servers & AI Skills Directory",
    description: "The largest directory of MCP servers, OpenClaw Skills, and AI extensions.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCPSkills — MCP Servers & AI Skills Directory",
    description: "Discover MCP servers, OpenClaw Skills, and AI extensions.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: next-themes adds class attr on the client, which would cause a mismatch warning
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
