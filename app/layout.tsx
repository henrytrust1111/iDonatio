import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ProgressBarProvider from "@/components/ProgressBarProvider";
import { Open_Sans } from "next/font/google";

// Load all font weights
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans"
});

export const metadata: Metadata = {
  title: "iDonatio",
  description: "Donate with ease and transparency"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        {/* // In _app.tsx or a custom Head component */}
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDSJLDP8ehodqfX8FEFjhfOyp7NNniFUa4&libraries=places`}
          async
        ></script>
      </head>
      <body className="w-full max-w-full">
        <ProgressBarProvider>{children}</ProgressBarProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
