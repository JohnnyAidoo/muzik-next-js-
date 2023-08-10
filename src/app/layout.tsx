import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import SideBar from "./components/sidebar";
import Player from "./components/player";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MUZIK",
  description: "Music Streaming App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <SideBar />
        {children}
        <Player />
      </body>
    </html>
  );
}
