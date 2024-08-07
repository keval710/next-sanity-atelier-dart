import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SanityProvider } from "@/context/SanityContext";
import { UserProvider } from "@/context/UserContext";

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <SanityProvider>
            <Toaster position="top-right" />
            {children}
          </SanityProvider>
        </UserProvider>
      </body>
    </html>
  );
}
