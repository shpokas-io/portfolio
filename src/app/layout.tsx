import './globals.css';
import { ClientWrapper } from '@/components/ClientWrapper';

export const metadata = {
  title: 'SHPOKAS - Portfolio',
  description: 'Creative developer portfolio with vibrant animations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
