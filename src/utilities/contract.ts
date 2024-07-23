import {chain} from "@/services/chain";
import {client} from "@/services/thirdwebclient";
import {getContract} from "thirdweb";
import {contractABI} from "@/utilities/contractABI";

const contractAddress = "0xa6adb2dBD1745de84F488e04cF03d130A0913706";

export const contract = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: contractABI,
})