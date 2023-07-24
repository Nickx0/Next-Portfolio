import './globals.css'
import { Inter } from 'next/font/google'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Darikson Ochoa',
  description: 'Aplicacion de Next por Nick',
}

export default function RootLayout({ children,params }) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <script defer src="https://kit.fontawesome.com/64b02c5753.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
