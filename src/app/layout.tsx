import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { Toaster } from "@/components/ui/Toaster";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Breaddit",
  description:
    "Join the conversation on Breaddit, the community-driven platform where users upvote and downvote content, submit links and text posts, and engage in discussions on a variety of topics. Discover, share, and connect with like-minded individuals on Breaddit.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <Providers>
          <Navbar />

          {authModal}

          <div className="container max-w-7xl mx-auto h-full pt-12">
            {children}
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
