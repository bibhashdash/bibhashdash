'use client';
import {ConnectButton, TransactionButton, useActiveAccount} from "thirdweb/react";
import {client} from '@/services/thirdwebclient';
import {chain} from '@/services/chain';
import {useEffect, useState} from "react";
import {prepareContractCall, toWei} from "thirdweb";
import {contract} from "@/utilities/contract";

export const BuyMeCoffee = () => {
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [message, setMessage] = useState<string>();
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
  const account = useActiveAccount();

  useEffect(() => {
    setShowThankYou(false);
  }, [tipAmount])

  if (account) {
    return (
      <div className="p-3 w-fit bg-gray-950 rounded-md flex flex-col justify-center gap-4">
        <ConnectButton client={client} chain={chain}/>
        <div className="flex flex-col gap-2">
          <label className="text-white text-sm">Tip me? ☕</label>
          <input
            className="p-1 rounded-md"
            step="0.0001"
            type="number"
            value={tipAmount}
            onChange={e => setTipAmount(Number(e.target.value))}
          />
          <label className="text-white text-sm">Message</label>
          <textarea onChange={e => setMessage(e.target.value)} className="p-1 rounded-md"/>
          {
            message && tipAmount > 0 && (
              <TransactionButton
                transaction={() => (
                  prepareContractCall(({
                    contract: contract,
                    method: "buyMeACoffee",
                    params: [message],
                    value: BigInt(toWei((tipAmount.toString()))),
                  }))
                )}

                onTransactionConfirmed={() => {
                  setMessage("");
                  setTipAmount(0);
                  setShowThankYou(true)
                }}
              >
                Pay
              </TransactionButton>
            )
          }
          {
            showThankYou && (
              <p>Thank you for the tip!</p>
            )
          }
        </div>
      </div>
    )
  }
}