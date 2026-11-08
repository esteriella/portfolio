import Header from "@/components/header";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import StructuredData from "@/components/structured-data";
import { createPageMetadata, siteName, siteUrl } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...createPageMetadata({
    title: "Opeyemi Esther Agbaje | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer working across C#/.NET desktop applications, backend systems, and responsive web development with React, Next.js, and TypeScript.",
    path: "/",
    type: "profile",
  }),
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    jobTitle: "Full-Stack Software Engineer",
    url: `${siteUrl}/about`,
    email: "agbajeopeyemiesther@gmail.com",
    sameAs: [
      "https://github.com/esteriella",
      "https://www.linkedin.com/in/opeyemi-esther-agbaje-754b9822b",
    ],
    knowsAbout: [
      "C#",
      ".NET",
      "WPF",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Backend development",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    publisher: {
      "@type": "Person",
      name: siteName,
      url: `${siteUrl}/about`,
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} pt-24`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <StructuredData data={structuredData} />
            <a className="skip-link" href="#main-content">
              Skip to content
            </a>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
