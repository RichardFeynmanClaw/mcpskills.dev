import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mcphub.dev"),
  title: {
    default: "MCPHub — The MCP Server Directory",
    template: "%s | MCPHub",
  },
  description:
    "Discover, install, and share MCP (Model Context Protocol) servers. The largest directory of MCP servers for Claude, Cursor, and every AI assistant.",
  keywords: ["MCP", "Model Context Protocol", "Claude", "AI tools", "MCP servers", "AI agents"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mcphub.dev",
    siteName: "MCPHub",
    title: "MCPHub — The MCP Server Directory",
    description: "The largest directory of MCP servers for Claude and every AI assistant.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCPHub — The MCP Server Directory",
    description: "Discover, install, and share MCP servers.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
