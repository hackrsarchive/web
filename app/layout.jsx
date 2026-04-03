import "./globals.css";

export const metadata = {
  title: "hackr's Archive",
  description: "hackr's Archive is a tiny game studio building weird, fun, and experimental projects.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
