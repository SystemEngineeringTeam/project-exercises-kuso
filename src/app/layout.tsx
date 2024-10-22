import type { Metadata } from 'next';
import { Sawarabi_Mincho } from 'next/font/google';
import { Providers } from './Providers';
import './globals.scss';

const sawarabi = Sawarabi_Mincho({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'クソコード博覧会',
  description: 'クソコードを共有し、アンチパターンを知るためのサイトです',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={sawarabi.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
