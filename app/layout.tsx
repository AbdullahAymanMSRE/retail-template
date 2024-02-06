import "../styles/layout.scss";
import "../styles/main.scss";
import type { Metadata } from "next";
import Nav from "@/app/components/nav";

export const metadata: Metadata = {
  title: "Retail Template",
  description: "This is a retail complany website template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
