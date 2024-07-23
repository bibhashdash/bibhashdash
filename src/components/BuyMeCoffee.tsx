'use client';
import {ConnectButton, useActiveAccount} from "thirdweb/react";
import {client} from '@/services/thirdwebclient';
import {chain} from '@/services/chain';
import {useState} from "react";
export const BuyMeCoffee = () => {
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [message, setMessage] = useState<string>();
  const account = useActiveAccount();
  if (account) {
    return (
      <div className="p-3 w-fit bg-gray-950 rounded-md flex justify-center gap-4">
        <ConnectButton client={client} chain={chain} />
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm">Tip me? ☕</label>
          <div className="flex gap-2">
            <input
              className="p-1 rounded-md"
              step="0.0001"
              type="number"
              value={tipAmount}
              onChange={e => setTipAmount(Number(e.target.value))}
            />
            <button className="bg-blue-600 text-white rounded-md py-1 px-2 disabled:bg-gray-700 disabled:text-gray-500" disabled={tipAmount === 0}>Pay</button>
          </div>
        </div>
      </div>
    )
  }
}