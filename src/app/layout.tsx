import './globals.css';

export const metadata = {
  title: 'Simple Tailwind Test',
  description: 'A minimal test for Tailwind CSS with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
