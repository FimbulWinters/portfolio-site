import "tailwindcss/tailwind.css";
import Navigation from "./nav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <body>
          {children}
          <Navigation />
        </body>
      </head>
    </html>
  );
}
