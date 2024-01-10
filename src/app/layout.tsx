import Header from "@/components/Header";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import "@/styles/globals.css";
import * as React from "react";

export const metadata = {
  title: "Home | Product Listing",
  description: "Home | Product Listing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
