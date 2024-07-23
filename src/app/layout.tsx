import './globals.css'
import type {Metadata} from 'next'
import {Poppins, Playfair_Display} from 'next/font/google'
import React from "react";
import {MainHeader} from "@/components/MainHeader";
import {MainNavigation} from "@/components/MainNavigation";
import {ConnectEmbed, ThirdwebProvider} from "@/services/thirdweb";

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
    <body className={`${poppins.variable} ${playfair.variable} font-sans bg-gray-100 w-full flex justify-center px-2 md:py-8`}>
    <ThirdwebProvider>
      <div className="w-full max-w-6xl">
        <MainHeader />
        <div className="md:flex md:flex-row-reverse w-full">
          <div className="w-full py-4 md:px-8">
            {children}
          </div>
          <div className="fixed bottom-0 left-0 md:static w-full md:w-fit md:py-8">
            <MainNavigation />
          </div>
        </div>
      </div>
    </ThirdwebProvider>
    </body>
    </html>
  )
}
