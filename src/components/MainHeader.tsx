'use client';
import {TwitterIcon} from "@/icons/TwitterIcon";
import {EmailIcon} from "@/icons/EmailIcon";
import {LinkedInIcon} from "@/icons/LinkedInIcon";
import {CoffeeIcon} from "@/icons/CoffeeIcon";
import {ConnectEmbed} from "thirdweb/react";
import {client} from "@/services/thirdwebclient";
import {chain} from "@/services/chain";
import {BuyMeCoffee} from "@/components/BuyMeCoffee";
import {useActiveAccount} from "thirdweb/react";
import {useEffect, useState} from "react";
export const MainHeader = () => {
  const account = useActiveAccount();
  const [showWalletConnectOption, setShowWalletConnectOption] = useState<boolean>(true);
  useEffect(() => {
    if (account) {
      setShowWalletConnectOption(false);
    }
    else {
      setShowWalletConnectOption(true);
    }
  }, [account])

  return (
    <div className="flex w-full justify-between px-4 py-2 border-b-4 border-slate-900 sm:mb-4">
      <div className="flex flex-col gap-2 sm:gap-6">
        <div className="flex flex-col gap-2 sm:gap-4">
          <h1 className="text-2xl sm:text-6xl font-display">Bibhash Dash</h1>
          <h2 className="text-sm sm:text-xl">Software Developer</h2>
        </div>
        <div className="flex gap-6">
          <TwitterIcon />
          <EmailIcon />
          <LinkedInIcon />
        </div>
        <div>
          {
            showWalletConnectOption && (
              <details>
                <summary className="text-red-600 font-bold">Connect your Wallet?</summary>
                <ConnectEmbed modalSize={"compact"} client={client} chain={chain} />
              </details>
            )
          }
          <BuyMeCoffee />
        </div>
      </div>
      <div>
        <img alt="hero image" src="/assets/heroImage3.jpg" className="w-20 sm:w-28 md:w-36 rounded-[50%] border-4 border-slate-200"/>
      </div>
    </div>
  )
}
