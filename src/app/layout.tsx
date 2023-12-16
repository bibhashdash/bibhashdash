import './globals.css'
import type {Metadata} from 'next'
import {Poppins, Playfair_Display} from 'next/font/google'
import React from "react";
import {MainHeader} from "@/components/MainHeader";
import {MainNavigation} from "@/components/MainNavigation";

const poppins = Poppins(
  {
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  }
)

const playfair = Playfair_Display(
  {
    subsets: ['latin'],
    variable: '--font-playfair',
    weight: ["400", "500", "600", "700", "800", "900"],
  }
)

export const metadata: Metadata = {
  title: 'Bibhash Dash',
  description: 'A software developer',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${poppins.variable} ${playfair.variable} font-sans bg-gray-100 h-screen flex flex-col items-center px-6`}>
    <MainHeader />
    <div className="grid grid-cols-12 justify-between w-full py-4">
      <MainNavigation />
      <div className="w-full col-span-9">
        {children}
      </div>
    </div>
    </body>
    </html>
  )
}
