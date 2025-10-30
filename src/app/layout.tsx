import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ padding: 20 }}>
        <nav style={{ marginBottom: 20 }}>
          <Link href="/">Home Page</Link> |{" "}
          <Link href="/users">Users</Link> |{" "}
          <Link href="/products">Products</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
