import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";
import { LocaleProvider, localeInitScript } from "@/components/LocaleProvider";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { siteConfig } from "@/lib/data";
import { translations, defaultLocale } from "@/lib/i18n/translations";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = "https://mi-portafolio.example.com";
const defaultDict = translations[defaultLocale];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.name} — ${defaultDict.hero.role}`,
  description: defaultDict.hero.tagline,
  openGraph: {
    title: `${siteConfig.name} — ${defaultDict.hero.role}`,
    description: defaultDict.hero.tagline,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${defaultDict.hero.role}`,
    description: defaultDict.hero.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLocale}
      className={`${spaceGrotesk.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>
          <LocaleProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
