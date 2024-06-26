import { ethers } from "ethers";
import { config } from "../config";

const provider = new ethers.providers.StaticJsonRpcProvider(config.rpcUrl);
const wallet = new ethers.Wallet(config.privateKey, provider);
const contract = new ethers.Contract(
  config.contractAddress,
  config.contractAbi,
  wallet
);

export const readMessage = async (): Promise<string> => {
  return await contract.getMessage();
};

export const setMessage = async (
  message: string
): Promise<ethers.providers.TransactionReceipt> => {
  const tx = await contract.setMessage(message);
  return await tx.wait();
};
