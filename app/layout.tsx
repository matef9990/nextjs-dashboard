import '@/app/ui/global.css'
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter} antialiased`} lang="en">
      <body>{children}</body>
    </html>
  );
}
