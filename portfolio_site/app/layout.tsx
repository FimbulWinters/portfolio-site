import "tailwindcss/tailwind.css";
import Navigation from "./nav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="bg-background">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
