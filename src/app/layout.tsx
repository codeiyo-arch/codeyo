import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

import NavbarWrapper from "@/components/NavbarWrapper";
// ...



// new commit 

// export const metadata: Metadata = {
//   title: "Codeiyo",
//   description: "Learn today. Build tomorrow.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <meta name="google-site-verification" content="wIQHpdEXtM5PsFCrsCFrk_9o2ANib1tXRXOEgFjm5CA" />
//       <body className="antialiased" style={{ zoom: "0.90" }}>
//         <div className="min-h-screen selection:bg-brand-accent/30 flex flex-col">
//           {/* <Navbar /> */}
//           <NavbarWrapper />
//           <main className="flex-1">
//             {children}
//           </main>
//           <Footer />
//         </div>
//         <Analytics />
//       </body>
//     </html>
//   );
// }

export const metadata: Metadata = {
  title: "Codeiyo",
  description: "Learn today. Build tomorrow.",
  verification: {
    google: "wIQHpdEXtM5PsFCrsCFrk_9o2ANib1tXRXOEgFjm5CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Site Name */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Codeiyo",
              "url": "https://www.codeiyo.com/"
            }),
          }}
        />
      </head>
      <body className="antialiased" style={{ zoom: "0.90" }}>
        <div className="min-h-screen selection:bg-brand-accent/30 flex flex-col">
          {/* <Navbar /> */}
          <NavbarWrapper />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
