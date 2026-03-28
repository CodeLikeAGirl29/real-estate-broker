// src/app/layout.tsx
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Nav />
        {/* The "children" below is where your Home, Blog, or Contact pages inject their code */}
        {children}
        <Footer />
      </body>
    </html>
  );
}