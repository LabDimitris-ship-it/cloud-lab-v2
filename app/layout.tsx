import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Lab – Ρομποτική & STEAM",
  description:
    "Μαθήματα Ρομποτικής, Python Programming, STEM Activities και Summer Camp για παιδιά.",

  openGraph: {
    title: "Cloud Lab – Ρομποτική & STEAM",
    description:
      "Ρομποτική, Python Programming, STEM Activities και Summer Camp.",
    url: "https://cloud-lab-v2-lwcpvs6p8-cloud-lab-s-projects.vercel.app",
    siteName: "Cloud Lab",
    images: [
      {
        url: "/images/team-building.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "el_GR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}