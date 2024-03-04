import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import customTheme from './antd-theme-config';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React UI Lib Picker',
  description: 'Choose the right UI component library for your React or Next.js project.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider theme={customTheme}>
            <main className="main">
              {children}
            </main>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
