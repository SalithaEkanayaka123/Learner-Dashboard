import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma | Adaptive knowledge assessment",
  description: "Turn study materials into sharper learning decisions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
