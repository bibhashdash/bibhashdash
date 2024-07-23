'use client';
import {ConnectButton, useActiveAccount} from "thirdweb/react";
import {client} from '@/services/thirdwebclient';
import {chain} from '@/services/chain';
export const BuyMeCoffee = () => {
  const account = useActiveAccount()
  if (account) {
    return (
      <div className="p-3 w-fit bg-gray-950 rounded-md flex justify-center">
        <ConnectButton client={client} chain={chain} />
      </div>
    )
  }
}