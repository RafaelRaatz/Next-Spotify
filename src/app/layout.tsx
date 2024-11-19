import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})


export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  return (
    <html lang="PT-BR">


      <body className={roboto.className} >
        <main className="bg-zinc-900 text-zinc-50 ">{children}</main>

      </body>


    </html>
  );
}
