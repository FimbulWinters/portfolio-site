import "tailwindcss/tailwind.css";
import Navigation from "./nav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("hello from home");
  return (
    <html>
      <head></head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
